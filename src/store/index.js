import { createStore } from 'vuex';

export default createStore({
  state: {
    tapTrigger: 0,
  },
  mutations: {
    toggleTapTrigger(state) { state.tapTrigger = Math.random(); },
  },
  actions: {
  },
  modules: {
  },
});
