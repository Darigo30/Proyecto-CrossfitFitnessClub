import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
import router from "@/router";
import { db } from "../../firebase";

Vue.use(Vuex);

import Plan from '../classes/plan'
import User from '../classes/user'

export default new Vuex.Store({
  state: {
    userRole: "viewer",
    actualUser: null,
    plan: [],
    users: [],
    planes: [],
    carrito: [],
    ventas: [],
    lastVisitedPage: "",
    pagado: false,
    titulos: [
      {
        label: "N° Clases",
        key: "ClasesSemanales",
      },
      {
        label: "Imagen",
        key: "imagen",
      },
      {
        label: "Nombre Plan",
        key: "nombrePlan",
      },
      {
        label: "Valor Mensual",
        key: "valorMensual",
      },
      {
        key: "actions",
        label: "Acciones",
      },
    ],
    editar: false,
    EditarPlan: {
      nombrePlan: "",
      valorMensual: "",
      ClasesSemanales: "",
      imagen: "",
    },
  },
  mutations: {
    setupUser(state,user){
      state.actualUser = user;
    },
    cerrarSesion(state) {
      state.actualUser = null;
      router.push("/");
    },
    addReservationToUser(state,payload){
      if(state.actualUser != null){
        state.actualUser.validateAvailableReserveIntoWeekByHiredPlan(payload.dates)
        state.actualUser.addReservation(payload.reservation);
      }else console.log("No hay usuario logueado");
    },
    deleteUserReservation(state,reservation){
      if(state.actualUser != null){
        state.actualUser.deleteReservation(reservation);
      }else console.log("No hay usuario logueado");
    },
    cargarDatos(state, payload) {
      state.planes = payload;
    },
    agregarPlan(state, payload) {
      const agregar = payload.id;
      const cantidad = 1;
      const nombre = payload.nombrePlan;
      const precio = payload.valorMensual;
      const clasessemanales = payload.ClasesSemanales;
      const total = precio * cantidad;
      const buscar = state.carrito.find((obj) => obj.id === agregar);
      if (!buscar && state.carrito.length === 0) {
        const AddPlan = {
          id: agregar,
          cantidad,
          nombre,
          precio,
          total,
          clasessemanales,
        };
        console.log(AddPlan, payload);
        state.carrito.push(AddPlan);
      }else{
        alert("Ya tienes un plan en el carrito")
      }
    },
    btnComprar(state) {
      if (state.actualUser) {
        const compraFinal = confirm("¿Quieres comprar ahora?");
        if (compraFinal) {
          const ventaPlan = state.carrito.map((obj) => {
            console.log(obj);
            const objvendido = {
              id: obj.id,
              nombre: obj.nombre,
              total: obj.total,
              cantidadVendida: obj.cantidad,
              clasessemanales : obj.clasessemanales
            };
            console.log(objvendido, "la venta");
            return objvendido;
          });
          state.actualUser.plan = new Plan(ventaPlan[0].nombre,ventaPlan[0].clasessemanales);
          state.ventas = ventaPlan;
          state.carrito = [];
          state.pagado = true;
        }
      } else {
        state.pagado = false;
      }
    },
    setLastVisitedPage(state, namePage) {
      state.lastVisitedPage = namePage;
    },
    eliminarCarrito(state) {
      state.carrito = [];
    },
    booleanEditar(state) {
      state.editar = true;
    },
    editarPlanesTabla(state, payload) {
      const editado = payload;
      state.EditarPlan = editado;
    },
    actualizarPlanes(state, payload) {
      const result = state.planes.filter((plan) => plan.id != payload.id);
      result.push(payload);
      state.planes = result;
    },
    borrarProducto(state, payload) {
      const borrarPlanFil = payload;
      if (!borrarPlanFil) return;
      let borradoFila = state.planes.filter(
        (plagin) => plagin.id != payload.id
      );
      state.planes = borradoFila;
      console.log(borradoFila);
    },
    agregarPlanalState(state, payload) {
      const existePlan = state.planes.find((planadd) => planadd.id === payload.id);
       // Si no existe ingresar a la base de datos.
       if (!existePlan) state.planes.push(payload);
    }
  },
  getters: {
    getActualUserReservation: state => {
      return state.actualUser ? state.actualUser.reservation : [];
    },
    getUserById: (state) => (id) => {
      let user = state.users.find(u => u.user === id);
      console.log("Usuario encontrado")
      console.log(state.users[0].name);
      return user;
    },
    infoUsers(state){
      return state.actualUser;
    },
    cantidadCarrito(state) {
      return state.carrito.length;
    },
    cardsPlanes(state) {
      return !state.planes ? [] : state.planes;
    },
    totalCarrito(state) {
      const carrito = state.carrito;
      if (carrito.length === 0) return 0;
      const suma = carrito.reduce((acc, x) => acc + x.total, 0);
      return suma;
    },
    valorLogeadoPagado(state) {
      return state.pagado;
    },
    isLogeado(state) {
      return state.actualUser !== null ? true : false;
    }
  },
  actions: {
    async updateUser({ commit },user){
      console.log(commit)
      let userDB = User.reverseUser(user);
      await db.collection("usuarios").doc(user.id).set(JSON.parse( JSON.stringify(userDB)));
  },
    async getDataApi({ commit }) {
      //se saca llamada de api con axios para ocupar el get de firebase
      // const url =
      //   "https://us-central1-apis-varias-mias.cloudfunctions.net/planes_crossfit"; //Api G.Fleming
      try {
        let query = await db.collection("planes").get();
        let PlanesGet =  query.docs.map(doc =>  {let planSocio = doc.data();planSocio.id = doc.id; return planSocio})
        commit("cargarDatos", PlanesGet);
      } catch (error) {
        console.error(error);
      }
    },
    async setDataPlanes({ commit }) {
      commit("guardarPlanesDB");
    },
    async deleteProducto({ commit }, payload) {
      const borrarPlan = payload;
      if (!borrarPlan) return;
      try {
        await db.collection('planes').doc(borrarPlan.id).delete();
        commit("borrarProducto", borrarPlan);
      } catch (error) {
        console.log(error);
      }
    },
     //actualizar
     async updateProducto({ commit }, payload) {
      const planEditarF = payload;
      let updated = true;
      if (!planEditarF) return;
      try {
        await db.collection("planes").doc(planEditarF.id).set(JSON.parse( JSON.stringify(planEditarF)));
        commit("actualizarPlanes", payload);
      }catch(e){
        console.error(e);
        updated = !updated;
      }
      return updated;
    },
    //Agrego nuevo producto
    async crearNuevoPlan({ commit }, payload) {
      const nuevo = payload;
      if (!nuevo) return;
     // Actualizar el state
      commit("agregarPlanalState", nuevo);
      await db.collection("planes").add(nuevo);
    },
  }
});
