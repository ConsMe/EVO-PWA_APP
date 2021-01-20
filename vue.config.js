module.exports = {
  productionSourceMap: false,
  publicPath: '',

  pwa: {
    themeColor: '#4796f6',
    msTileColor: '#4796f6',
    appleMobileWebAppStatusBarStyle: '#4796f6',
    icons: [
      {
        src: 'img/icons/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    iconPaths: {
      favicon32: 'img/icons/32x32.png',
      favicon16: 'img/icons/16x16.png',
      appleTouchIcon: 'img/icons/152x152.png',
      maskIcon: 'img/icons/safari.svg',
      msTileImage: 'img/icons/144x144.png',
      androidChrome: 'img/icons/192x192.png',
    },
    name: 'EVO Controller APP',
    assetsVersion: '0.0.1',
  },

  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: [
    'scrollbooster',
  ],
};
