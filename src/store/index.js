import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import User from '../classes/user'
import Plan from '../classes/plan'

export default new Vuex.Store({
  state: {
    userRole: "viewer",
    actualUser: null,
    plan: [],
    users: [new User("Sergio","storoe1992@gmail.com",new Plan("4 por semana",4),null)]
  },
  mutations: {
    setupUser(state,user){
      state.actualUser = user;
    },
    addReservationToUser(state,reservation){
      if(state.actualUser != null){
        state.actualUser.addReservation(reservation);
      }else console.log("No hay usuario logueado")
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
    }
  },
  actions: {},
  modules: {},
});
