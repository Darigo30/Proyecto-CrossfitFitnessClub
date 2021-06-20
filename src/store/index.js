import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
import router from "@/router";
import { db } from "../../firebase";

Vue.use(Vuex);

import User from "../classes/user";
import Plan from "../classes/plan";

export default new Vuex.Store({
  state: {
    userRole: "viewer",
    actualUser: null,
    plan: [],
    users: [
      new User(
        "Sergio Toro",
        "storoe1992@gmail.com",
        null,
        null,
        "c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646",
        "admin"
      ),
      new User(
        "Dariana Gómez",
        "darigomez30@gmail.com",
        new Plan("4 por semana", 4),
        null,
        "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
      ),
      new User(
        "Pedro Picapiedra",
        "elmaspicao@gmail.com",
        new Plan("4 por semana", 4),
        null,
        "ba0d8e07c173dd0b1a397d452ccc53c7a3dc5f079032cc4c7fdb8be0d51bf439"
      ),
      new User(
        "Demonio Tasmania",
        "tasmania@gmail.com",
        null,
        null,
        "95dc60d770dc95a7432111ab1bfb57c0494b36716629e47471e197256e9945a2"
      ),
    ],
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
    setupUser(state, user) {
      state.actualUser = user;
    },
    cerrarSesion(state) {
      state.actualUser = null;
      router.push("/");
    },
    addReservationToUser(state, payload) {
      if (state.actualUser != null) {
        state.actualUser.validateAvailableReserveIntoWeekByHiredPlan(
          payload.dates
        );
        state.actualUser.addReservation(payload.reservation);
      } else console.log("No hay usuario logueado");
    },
    deleteUserReservation(state, reservation) {
      if (state.actualUser != null) {
        state.actualUser.deleteReservation(reservation);
      } else console.log("No hay usuario logueado");
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
      } else {
        alert("Ya tienes un plan en el carrito");
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
              clasessemanales: obj.clasessemanales,
            };
            console.log(objvendido, "la venta");
            return objvendido;
          });
          state.actualUser.plan = new Plan(
            ventaPlan[0].nombre,
            ventaPlan[0].clasessemanales
          );
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
    //guardar planes en BD Firebase desde API inicial
    guardarPlanesDB(state) {
      console.log(state);
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
    getReservations: (state) => {
      return state.users.flatMap((user) => user.reservation);
    },
    getActualUserReservation: (state) => {
      return state.actualUser ? state.actualUser.reservation : [];
    },
    getUserById: (state) => (id) => {
      let user = state.users.find((u) => u.user === id);
      console.log("Usuario encontrado");
      console.log(state.users[0].name);
      return user;
    },
    infoUsers(state) {
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
    },
  },
  actions: {
    async getDataApi({ commit }) {
      //se saca llamada de api con axios para ocupar el get de firebase
      // const url =
      //   "https://us-central1-apis-varias-mias.cloudfunctions.net/planes_crossfit"; //Api G.Fleming
      try {
        const PlanesGet = [];
        const fire = await db.collection("planes");
        fire.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            PlanesGet.push(doc.data());
          });
        });
        commit("cargarDatos", PlanesGet);
      } catch (error) {
        console.log(error);
      }
    },
    async setDataPlanes({ commit }) {
      commit("guardarPlanesDB");
    },
    async deleteProducto({ commit }, payload) {
      const borrarPlan = payload;
      if (!borrarPlan) return;

      // Eliminar desde Firebase
      try {
        let collectionRef = db.collection("planes");
        collectionRef
          .where("id", "==", payload.id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref
                .delete()
                .then(() => {
                  console.log("el doc fue borrado");
                })
                .catch(function (error) {
                  console.error("ha ocurrido un error al borrar: ", error);
                });
            });
          })
          .catch(function (error) {
            console.log("Error al obtener el documento: ", error);
          });
      } catch (error) {
        console.log(error);
      }
      // Eliminar desde Vuex
      commit("borrarProducto", borrarPlan);
    },
     //actualizar 
     async updateProducto({ commit }, payload) {
      const planEditarF = payload;
      if (!planEditarF) return;
      // Firebase
      try {

        let collectionRef = db.collection("planes");
        collectionRef
          .where("id", "==", payload.id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref
                .update({
                  nombrePlan: planEditarF.nombrePlan,
                  valorMensual: planEditarF.valorMensual,
                  ClasesSemanales: planEditarF.ClasesSemanales,
                  imagen: planEditarF.imagen,
                  id: planEditarF.id,
                })
                .then(() => {
                  console.log("el doc fue actualizado");
                  commit("actualizarPlanes", payload);
                  return true;
                })
                .catch(function (error) {
                  console.error("ha ocurrido un error al actualizar: ", error);
                  return false;
                });
            });
          })
          .catch(function (error) {
            console.log("Error al obtener el documento: ", error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    //Agrego nuevo producto
    async crearNuevoPlan({ commit }, payload) {
      const nuevo = payload;
      if (!nuevo) return;
     // Actualizar el state
      commit("agregarPlanalState", nuevo);
      await db.collection("planes").add(nuevo);
    },
  },
});
