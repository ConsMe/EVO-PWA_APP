import axios from 'axios';

export default {
  install: (app) => {
    const $server = axios.create({
      baseURL: app.config.globalProperties.$store.state.serverUrl,
      timeout: 5000,
    });
    $server.interceptors.request.use((config) => {
      const newConfig = config;
      const token = app.config.globalProperties.$store.state.authToken;
      if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
        if (config.method === 'get') {
          newConfig.params = { request: { ...config.params } };
        }
      }
      if (!app.config.globalProperties.$store.state.widgets.length) newConfig.timeout = 0;
      return newConfig;
    }, (error) => Promise.reject(error));
    $server.interceptors.response.use((response) => response, (error) => {
      if (error.response && error.response.status && error.response.status === 401) {
        app.config.globalProperties.$router.push({ name: 'Login' });
        app.config.globalProperties.$store.commit('signOut');
      }
      return Promise.reject(error);
    });
    Object.assign(app.config.globalProperties, {
      $server,
    });
  },
};
