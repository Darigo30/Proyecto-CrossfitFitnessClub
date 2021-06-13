import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

import User from '../classes/user'
import Plan from '../classes/plan'

export default new Vuex.Store({
  state: {
    userRole: "viewer",
    actualUser: null,
    plan: [],
    users: [
      new User(
      "Sergio",
      "storoe1992@gmail.com",
      new Plan("4 por semana",4),null),
      new User(
        "Dariana",
        "darigomez30@gmail.com",
        new Plan("4 por semana",4),null)
      ],
    planes: [],
    carrito: [],
    ventas: [],
    lastVisitedPage: "",
    pagado: false
  },
  mutations: {
    setupUser(state,user){
      state.actualUser = user;
    },
    addReservationToUser(state,reservation){
      if(state.actualUser != null){
        state.actualUser.addReservation(reservation);
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
          if (!buscar) {
            const AddPlan = {
              id: agregar,
              cantidad,
              nombre,
              precio,
              total,
              clasessemanales,
            };
            console.log(AddPlan, payload)
            state.carrito.push(AddPlan);
          } else {
            buscar.cantidad = cantidad + buscar.cantidad;
            buscar.subtotal = buscar.cantidad * precio;
          }
        },
        btnComprar(state) {
          if(state.actualUser){
          const compraFinal = confirm("¿Quieres comprar ahora?");
          if (compraFinal) {
            const ventaPlan = state.carrito.map((obj) => {
              const objvendido = {
                id: obj.id,
                nombre: obj.nombre,
                total: obj.total,
                cantidadVendida: obj.cantidad,
              };
              console.log(objvendido, "la venta");
              return objvendido;
            });
            state.ventas = ventaPlan;
            state.carrito = [];
            state.pagado = true;
          }
          } else{
            state.pagado = false;
          }
        },
        setLastVisitedPage(state, namePage){
          state.lastVisitedPage = namePage;
        }
  },
  getters: {
    getReservations: state => {
      return state.users.flatMap(user => user.reservation);
    },
    getActualUserReservation: state => {
      return state.actualUser ? state.actualUser.reservation : [];
    },
    getUserById: (state) => (id) => {
      let user = state.users.find(u => u.user === id);
      console.log("Usuario encontrado")
      console.log(state.users[0].name);
      return user;
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
  async getDataApi({ commit }) {
        const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/planes_crossfit";
        try {
          const req = await axios(url);
          const planesAxi = req.data;
          commit("cargarDatos", planesAxi);
          return planesAxi;
        } catch (error) {
          console.log(error, "error al obtener datos");
        }
      }
  },
});
