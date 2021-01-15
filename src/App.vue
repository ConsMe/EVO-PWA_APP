<template>
  <div class="wrapper flex justify-center w-full">
    <div
      class="flex justify-center"
      :class="{ 'bg-main': $route.name !== 'Login' }">
      <router-view />
    </div>
  </div>
</template>

<script>
import 'tailwindcss/tailwind.css';
import '@/assets/style/styles.css';

export default {
  mounted() {
    window.addEventListener('mouseup', () => {
      this.$store.commit('toggleTapTrigger');
    });
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Light.otf");
  font-weight: 300;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Regular.otf");
  font-weight: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Medium.otf");
  font-weight: 500;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Semibold.otf");
  font-weight: 600;
}
html {
  font-size: 16px;
  font-family: Gilroy;
  font-weight: normal;
}
.wrapper > div {
  width: 100%;
  max-width: 375px;
}
.bg-main {
  background: linear-gradient(298.87deg, #F2F3FB 15.39%, #F8F9FC 84.02%);
}
</style>
