<template>
  <div class="bottom-menu">
    <transition name="fade" mode="out-in">
      <div
        class="fixed w-full left-0 top-0 h-full menu-bg z-40 right-0 m-auto"
        v-if="isBottomMenuOpen"
        @click="$store.commit('toggleBottomMenu', false)"></div>
    </transition>
    <div
      class=" bg-white h-60 fixed w-full left-0 transition-transform
        bottom-0 transform z-40 rounded-t-3xl dark:bg-354 right-0 m-auto"
      :class="isBottomMenuOpen ? 'translate-y-0' : 'translate-y-60'">
      <div class="flex items-center mx-3 px-3 py-6 border-b border-6de dark:border-829">
        <switcher
          @toggle="$store.commit('toggleDarkTheme', $event)"
          class="mb-0.5 mr-2"
          :isActive="isDarkTheme" />
        <span
          class="font-medium text-284 dark:text-c8d leading-none tracking-wide"
          @click="$store.commit('toggleDarkTheme', !isDarkTheme)">
          {{ isDarkTheme ? 'Выключить' : 'Включить' }} темную тему
        </span>
      </div>
      <div class="m-3 p-3 signout-btn rounded-xl" @click="signOut">
        <signout-image class=" inline-block mr-4 w-6 mb-0.5" />
        <span class=" font-medium text-284 dark:text-c8d leading-none tracking-wide">Выйти</span>
      </div>
    </div>
  </div>
</template>

<script>
import Switcher from '../Switcher.vue';
import SignoutImage from './SignoutImage.vue';

export default {
  name: 'BottomMenu',
  components: { Switcher, SignoutImage },
  computed: {
    isBottomMenuOpen() { return this.$store.state.isBottomMenuOpen; },
    isDarkTheme() { return this.$store.state.isDarkTheme; },
  },
  methods: {
    signOut() {
      this.$router.push({ name: 'Login' });
      this.$store.commit('signOut');
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-bg {
  background: rgba(203, 222, 231, 0.45);
  .dark & {
    background: rgba(27, 42, 64, 0.58);
  }
}
.signout-btn:active {
  background: rgba(244, 248, 253, 0.37);
  .dark & {
    background: #435A7C;
  }
}
</style>
