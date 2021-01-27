<template>
  <div class=" w-full justify-start flex flex-col pb-5">
    <panel-header
      name="Константин"
      :temp="40"
      :isNgOnline="true"
      :isOnline="true" />
    <div class="w-5/6 self-center mt-7">
      <h1 class=" font-semibold text-284 dark:text-c8d text-2xl">
        {{ isFavourites ? 'Избранное' : 'Группы' }}
      </h1>
      <groups
        v-if="!isFavourites" />
      <widgets />
    </div>
    <quick-nav />
    <bottom-menu />
  </div>
</template>

<script>
import PanelHeader from '../components/Panel/Header.vue';
import Groups from '../components/Panel/Groups.vue';
import Widgets from '../components/Panel/Widgets.vue';
import QuickNav from '../components/Panel/QuickNav.vue';
import BottomMenu from '../components/Panel/BottomMenu.vue';

export default {
  components: {
    PanelHeader, Widgets, Groups, QuickNav, BottomMenu,
  },
  data() {
    return {
      groups: ['Группа (помещение)', 'Гостиничный номер', 'Комната', 'Ванная'],
      activeGroup: '',
    };
  },
  computed: {
    isFavourites() {
      return this.$route.name === 'Favourites';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
