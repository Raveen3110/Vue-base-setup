import Vue from 'vue'
import Vuex from 'vuex'
import snackBar from "./module/snackBar";


Vue.use(Vuex);
const getDefaultState = () => {
  return {
    isLoggedIn: false,
  };
};

// initial state
const state = getDefaultState();

const actions = {
  // resetStoreState({ commit }) {
  //   commit("RESET_STATE");
  // },
};

const mutations = {
  // RESET_STATE(state) {
  //   Object.assign(state, getDefaultState());
  // },
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  modules: {
    snackBar,
   
  },
})
