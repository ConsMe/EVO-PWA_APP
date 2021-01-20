<template>
  <div class="overflow-x-auto flex whitespace-nowrap py-3" ref="groups">
    <div class=" inline-block" ref="content">
    <span
      v-for="(group, i) in groups"
      :key="i"
      class="inline-block cursor-pointer bg-white dark:bg-23354 rounded-md px-5
        py-2 mr-3 text-sm"
      :class="
        activeGroup === group
          ? 'button-gradient text-white font-semibold'
          : 'text-829 dark:text-c8d font-medium'
      "
      @click="$emit('setActive', group)"
    >
      {{ group }}
    </span>
    </div>
  </div>
</template>

<script>
import ScrollBooster from 'scrollbooster';

export default {
  name: 'Groups',
  props: ['groups', 'activeGroup'],
  data() {
    return {
      scrollBooster: null,
    };
  },
  mounted() {
    if (!this.isTouchDevice()) {
      this.scrollBooster = new ScrollBooster({
        viewport: this.$refs.groups,
        content: this.$refs.content,
        scrollMode: 'native',
        direction: 'horizontal',
        emulateScroll: true,
        preventDefaultOnEmulateScroll: 'vertical',
        onWheel: (state, event) => {
          let newPosition = state.position.x + event.deltaY * 3;
          if (newPosition < 0) newPosition = 0;
          const { content } = this.$refs;
          const maxScroll = content.scrollWidth || content.offsetWidth || 10000;
          if (newPosition > maxScroll) newPosition = maxScroll;
          this.scrollBooster.scrollTo({ x: newPosition, y: state.position.y });
        },
      });
    }
  },
  beforeUnmount() {
    if (this.scrollBooster) this.scrollBooster.destroy();
  },
  methods: {
    isTouchDevice() {
      return (('ontouchstart' in window)
        || (navigator.maxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    },
  },
};
</script>

<style lang="postcss" scoped>
@media (pointer: fine) {
  .overflow-x-auto {
    &::-webkit-scrollbar {
      @apply h-0.5;
    }
    &::-webkit-scrollbar-track {
      @apply bg-transparent;
    }
    &::-webkit-scrollbar-thumb {
      @apply bg-d6e;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
}
span {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
