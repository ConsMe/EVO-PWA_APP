import { createStore } from 'vuex';
import setMobileTheme from '../modules/setMobileTheme';

export default createStore({
  state: {
    tapTrigger: 0,
    isBottomMenuOpen: false,
    isDarkTheme: false,
  },
  mutations: {
    toggleTapTrigger(state) { state.tapTrigger = Math.random(); },
    toggleBottomMenu(state, isBottomMenuOpen) { state.isBottomMenuOpen = isBottomMenuOpen; },
    toggleDarkTheme(state, isDarkTheme) {
      state.isDarkTheme = isDarkTheme;
      if (isDarkTheme) {
        document.querySelector('html').classList.add('dark');
        localStorage.setItem('isDarkTheme', 1);
      } else {
        document.querySelector('html').classList.remove('dark');
        localStorage.setItem('isDarkTheme', 0);
      }
      setMobileTheme(isDarkTheme);
    },
  },
  actions: {
  },
  modules: {
  },
});
