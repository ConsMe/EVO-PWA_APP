const metas = [
  'meta[name="theme-color"]',
  'meta[name="apple-mobile-web-app-status-bar-style"]',
  'meta[name="msapplication-navbutton-color"]',
].join(', ');

export default (isDarkTheme) => {
  const color = isDarkTheme ? '#233653' : '#4796f6';
  document.head.querySelectorAll(metas).forEach((meta) => {
    meta.setAttribute('content', color);
  });
};
