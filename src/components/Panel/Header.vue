<template>
  <div
    class=" w-full h-36 flex justify-center items-end pb-5"
    :class="isDarkTheme ? 'bg-23365' : 'header-gradient'">
    <div class="w-5/6 grid grid-cols-2 gap-x-3">
      <div class=" grid grid-flow-col auto-cols-auto gap-x-3">
        <div>
          <profile-image
            class=" w-11 profile focus:outline-none transition-filter"
            tabindex="0"
            @click="$store.commit('toggleBottomMenu', true)" />
        </div>
        <div class=" text-white flex flex-col justify-center leading-tight">
          <p class="font-medium dark:text-829">Привет</p>
          <p class=" font-semibold dark:text-c8d">{{ name }}</p>
        </div>
      </div>
      <div class=" grid grid-flow-col auto-cols-auto gap-x-3 text-sm">
        <div
          class="inline-block rounded-md bg-white dark:bg-354 flex
            items-center justify-center">
          <span class=" font-medium text-284 dark:text-c8d leading-none mt-1 mr-1">
            {{ `${temp}°C` }}
          </span>
          <img src="@/assets/img/wheather/clear-day.svg" class=" w-5 inline-block">
        </div>
        <div class=" inline-block rounded-md bg-white dark:bg-354 flex items-center justify-center">
          <span
            class=" font-semibold mt-1 mr-1"
            :class="isNgOnline ? 'text-569' : 'text-d6e dark:text-829'">
            NG
          </span>
          <router-image :isOnline="isOnline" class=" w-5 inline-block" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import RouterImage from './RouterImage.vue';
import ProfileImage from './ProfileImage.vue';

export default {
  name: 'Header',
  props: ['name', 'temp', 'isNgOnline', 'isOnline'],
  components: { RouterImage, ProfileImage },
  computed: {
    isDarkTheme() { return this.$store.state.isDarkTheme; },
  },
};
</script>

<style lang="postcss" scoped>
.header-gradient {
  background: linear-gradient(
    180deg, #4A9EFE -28.21%, #3C77D6 132.18%, #6AA3FC 135.9%, #6AA3FC 135.9%
  );
}
.profile:active {
  filter: drop-shadow(0px 0px 11px rgba(197, 221, 255, 0.99));
  outline: none;
}
</style>
