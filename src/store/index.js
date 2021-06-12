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
    users: [new User("Sergio","storoe1992@gmail.com",new Plan("4 por semana",4),null)]
    planes: [],
    carrito: [],
    ventas: [],
  },
  mutations: {
    setupUser(state,user){
      state.actualUser = user;
    },
    addReservationToUser(state,reservation){
      if(state.actualUser != null){
        state.actualUser.addReservation(reservation);
      }else console.log("No hay usuario logueado")
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
          }
        }
  },
  getters: {
    getReservations: (state) => {
      return state.users.map(user => user.reservation);
    },
    getUserById: (state) => (id) => {
      let user = state.users.find(u => u.user === id);
      console.log("Usuario encontrado")
      console.log(user);
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
  },
  actions: {
  async getDataApi({ commit }) {
        const url = "https://us-central1-proyecto-crossfit.cloudfunctions.net/crossfit";
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
