import axios from 'axios';

export default {
  install: (app) => {
    const $http = axios.create({
      baseURL: app.config.globalProperties.$store.state.serverUrl,
      timeout: 5000,
    });
    $http.interceptors.request.use((config) => {
      console.log(config);
      const newConfig = config;
      if (config.url.length) {
        // newConfig.url = newConfig.url.replace('10.8.0.22', '10.8.0.50');
        newConfig.url = config.url.indexOf('http') >= 0
          ? config.url : `http://${config.url}`;
      } else {
        const token = app.config.globalProperties.$store.state.authToken;
        if (token) {
          newConfig.headers.Authorization = `Bearer ${token}`;
          if (config.method === 'get') {
            newConfig.params = { request: { ...config.params } };
          }
        }
      }
      return newConfig;
    }, (error) => Promise.reject(error));
    $http.interceptors.response.use((response) => response, (error) => {
      if (error.response && error.response.status && error.response.status === 401) {
        app.config.globalProperties.$router.push({ name: 'Login' });
        app.config.globalProperties.$store.commit('signOut');
      }
      return Promise.reject(error);
    });
    Object.assign(app.config.globalProperties, {
      $http,
    });
  },
};
