<template>
  <div
    class="fixed bottom-10 left-0 right-0 m-auto bg-white dark:bg-354
      rounded-full py-3 flex justify-center z-20 w-3/4 quick-nav">
    <router-link
      class="inline-block flex items-center justify-center
        w-3.875 h-2.875 rounded-md mr-3 transition-colors"
      :class="{'nav-selected': $route.name === 'Favourites'}"
      :to="{ name: 'Favourites' }">
      <favourite-image :isWhite="$route.name === 'Favourites'" :isQuickNav="true" />
    </router-link>
    <router-link
      class="inline-block flex items-center justify-center
        w-3.875 h-2.875 rounded-md ml-3 transition-colors"
      :class="{'nav-selected': $route.name === 'Groups'}"
      :to="{ name: 'Groups' }">
      <groups-image :isActive="$route.name === 'Groups'" />
    </router-link>
  </div>
</template>

<script>
import FavouriteImage from '../Widgets/FavouriteImage.vue';
import GroupsImage from './GroupsImage.vue';

export default {
  name: 'QuickNav',
  components: { FavouriteImage, GroupsImage },
};
</script>

<style lang="scss" scoped>
.nav-selected {
  background: linear-gradient(
    180deg,
    #4a9efe -28.21%,
    #3c77d6 132.18%,
    #6aa3fc 135.9%,
    #6aa3fc 135.9%
  );
  box-shadow: 0px 7px 6px -6px #8db3ec;
  .dark & {
    box-shadow: unset;
  }
}
.quick-nav {
  box-shadow: 0px 0px 19px #EBECF8;
  .dark & {
    box-shadow: 0px 0px 16px #2E415C;
  }
}
</style>
