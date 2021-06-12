import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userRole: "viewer",
    actualUser: null,
    plan: [],
    users: []
  },
  mutations: {},
  actions: {},
  modules: {},
});
