<template>
  <div class="text-center font-medium self-center mb-14 mt-2">
    <div class="grid grid-cols-2 gap-x-4">
      <fake-widgets v-if="!isFirstLoaded" />
      <template v-else>
        <common-widget
          v-for="(w, i) in widgets"
          :key="w.widget_id"
          v-bind="w"
          :data-index="i"
          @toggleActive="widgets[i].isActive = $event"
          @changeValue="widgets[i].value = $event"
          @changeColor="widgets[i].color = $event"
          :class="{ 'col-span-2': ['range', 'dimmer', 'color'].includes(w.type) }" />
      </template>
    </div>
  </div>
</template>

<script>
import CommonWidget from '@/components/Widgets/CommonWidget.vue';
import FakeWidgets from '@/components/Widgets/FakeWidgets.vue';

export default {
  name: 'Widgets',
  components: { CommonWidget, FakeWidgets },
  computed: {
    widgets() {
      return this.$store.state.currentWidgets;
    },
    isFirstLoaded() { return this.$store.state.isFirstLoaded; },
  },
  methods: {
  },
};
</script>
