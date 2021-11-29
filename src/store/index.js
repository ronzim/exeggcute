import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function initialState() {
  return {};
}

export default new Vuex.Store({
  state: {
    ...initialState()
  },
  mutations: {
    reset(state) {
      // acquire initial state
      const s = initialState();
      Object.keys(s).forEach(key => {
        state[key] = s[key];
      });
    }
  },
  actions: {
    clearState({ commit }) {
      commit("reset");
    }
  },
  modules: {}
});
