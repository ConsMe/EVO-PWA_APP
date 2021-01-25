import { createStore } from 'vuex';
import PostParams from '@/modules/PostParams';
import setMobileTheme from '../modules/setMobileTheme';

export default createStore({
  state: {
    tapTrigger: 0,
    isBottomMenuOpen: false,
    isDarkTheme: false,
    authToken: null,
    serverUrl: '/application_api.php',
    temperature: null,
    widgets: [],
    groups: [],
    groupId: null,
    currentWidgets: [],
    server: null,
    controller: null,
    queries: [],
    isSendingData: false,
    isFirstLoaded: false,
    prevValues: localStorage.getItem('prevValues')
      ? JSON.parse(localStorage.getItem('prevValues')) : {},
    // isFavouritePage: false,
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
    setAxiosServer(state, axios) { Object.assign(state, axios); },
    signIn(state, token) {
      state.authToken = token;
      localStorage.setItem('token', token);
    },
    signOut(state) {
      state.authToken = null;
      localStorage.removeItem('token');
    },
    setTemperature(state, temperature) { state.temperature = temperature; },
    setWidgets(state, widgets) {
      state.widgets = widgets.map((w, i) => Object.assign(w, { indexes: [i] }));
    },
    setGroups(state, groups) { state.groups = groups; },
    setGroupId(state, id) { state.groupId = id; },
    setCurrentWidgets(state, isFavouritePage) {
      if (!isFavouritePage && (!state.groups.length || !state.groupId)) return;
      const widgets = isFavouritePage
        ? state.widgets.filter((w) => w.favorite === '1')
        : state.widgets.filter((w) => w.group_id === state.groupId);
      state.currentWidgets = widgets
        .map((w, i) => Object.assign(w, { indexes: [w.indexes[0], i] }));
      state.isFirstLoaded = true;
    },
    clearCurrentWidgets(state) { state.currentWidgets = []; },
    setWidgetParams(state, { indexes, ...params }) {
      Object.assign(state.widgets[indexes[0]], params);
      const id = state.widgets[indexes[0]].widget_id;
      const index = state.currentWidgets.findIndex((w) => w.widget_id === id);
      if (index >= 0) Object.assign(state.currentWidgets[index], params);
    },
    addQuery(state, query) { state.queries.push(query); },
    startSending(state) { state.isSendingData = true; },
    stopSending(state) { state.isSendingData = false; },
    cleanQueries(state, { index, param }) {
      state.queries = state.queries.filter((q) => q.index !== index || !(param in q));
    },
    setPrevValue(state, { widgetId, value }) {
      state.prevValues[widgetId] = value;
      localStorage.setItem('prevValues', JSON.stringify(state.prevValues));
    },
  },
  actions: {
    setWidgets({ commit }, { widgets, isFavouritePage }) {
      commit('setWidgets', widgets);
      commit('setCurrentWidgets', isFavouritePage);
    },
    setGroups({ commit, state, dispatch }, { groups, isFavouritePage }) {
      commit('setGroups', groups);
      if (!state.groupId && groups.length) {
        dispatch('setGroupId', { id: groups[0].id, isFavouritePage });
      } else if (!isFavouritePage) {
        commit('setCurrentWidgets');
      }
    },
    setGroupId({ commit }, { id, isFavouritePage }) {
      commit('setGroupId', id);
      if (!isFavouritePage) commit('setCurrentWidgets');
    },
    setWidgetParams({ commit, state, dispatch }, payload) {
      commit('setWidgetParams', payload);
      const param = Object.keys(payload).find((p) => ['value', 'isActive', 'color'].includes(p));
      commit('addQuery', { index: payload.indexes[0], [param]: payload[param] });
      if (!state.isSendingData) {
        commit('startSending');
        dispatch('sendData');
      }
    },
    async sendData({ state, commit, dispatch }) {
      const query = state.queries[0];
      const { index, ...params } = query;
      const param = Object.keys(params)[0];
      state.queries.forEach((q) => {
        if (query.index === q.index && param in q) params[param] = q[param];
      });
      commit('cleanQueries', { index, param });
      const widget = state.widgets[index];
      let reply;
      const rp = new PostParams(widget, params);
      if (!rp) {
        console.error('That widget type not found');
        return;
      }
      if ('controller_ip' in widget && widget.controller_ip.length) {
        const requestParams = rp.getParams(true);
        reply = await dispatch('makeRequest', { source: 'controller', requestParams });
      }
      if (!reply) {
        const requestParams = rp.getParams(false);
        await dispatch('makeRequest', { source: 'server', requestParams });
      }
      if (state.queries.length) {
        dispatch('sendData');
      } else {
        commit('stopSending');
      }
    },
    makeRequest({ state }, { source, requestParams }) {
      const { url, params } = requestParams;
      return new Promise((resolve) => {
        state[source].post(url, params)
          .then(() => resolve(true))
          .catch(() => resolve(false));
      });
    },
  },
  modules: {
  },
});
