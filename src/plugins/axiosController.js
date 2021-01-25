import axios from 'axios';

export default {
  install: (app) => {
    const $controller = axios.create({
      timeout: 5000,
    });
    $controller.interceptors.request.use((config) => {
      const newConfig = config;
      newConfig.url = config.url.indexOf('http') >= 0
        ? config.url : `http://${config.url}`;
      return newConfig;
    }, (error) => Promise.reject(error));
    Object.assign(app.config.globalProperties, {
      $controller,
    });
  },
};
