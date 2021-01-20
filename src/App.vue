<template>
  <div class="wrapper flex justify-center w-full dark:bg-1b2">
    <div
      class="flex justify-center"
      :class="{
        'bg-main': $route.name !== 'Login' && !isDarkTheme,
        'py-12': !['Groups', 'Favourites'].includes($route.name),
        'pb-12': ['Groups', 'Favourites'].includes($route.name),
      }">
      <router-view />
    </div>
  </div>
</template>

<script>
import 'tailwindcss/tailwind.css';
import '@/assets/style/styles.scss';

export default {
  computed: {
    isDarkTheme() { return this.$store.state.isDarkTheme; },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title ? `EVO Controls | ${to.meta.title}` : 'EVO Controls';
    },
  },
  beforeCreate() {
    if (localStorage.isDarkTheme === '1') {
      this.$store.commit('toggleDarkTheme', true);
    }
  },
  mounted() {
    window.addEventListener('mouseup', () => {
      this.$store.commit('toggleTapTrigger');
    });
  },
};
</script>
