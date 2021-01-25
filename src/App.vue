<template>
  <div class="wrapper flex justify-center w-full dark:bg-1b2">
    <div
      class="flex justify-center overflow-hidden"
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
  created() {
    if (localStorage.isDarkTheme === '1') {
      this.$store.commit('toggleDarkTheme', true);
    }
    this.$store.commit('setAxiosServer', { server: this.$server, controller: this.$controller });
    this.checkAuth();
  },
  mounted() {
    window.addEventListener('mouseup', () => {
      this.$store.commit('toggleTapTrigger');
    });
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('token');
      if (!token) {
        if (this.$route.name !== 'Login') this.$router.push({ name: 'Login' });
        return;
      }
      this.$store.commit('signIn', token);
    },
  },
};
</script>
