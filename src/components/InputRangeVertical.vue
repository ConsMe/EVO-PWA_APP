<template>
  <div class=" relative w-3.75 rounded-lg overflow-hidden bg-white
    dark:bg-41587 inline-block input-range-wrap p-3">
    <div class="w-full h-full relative bg-f0f dark:bg-577095 rounded-md">
      <div
        class=" absolute bottom-1 left-1 right-1 rounded-md
          range-line transition-colors duration-500"
        :class="isActive ? 'bg-white' : 'bg-d6e dark:bg-23354'"
        :style="{ height: `calc(${value}% - 0.5rem)`, backgroundColor: bgColor }"></div>
    </div>
    <input
      type="range"
      class="h-full w-full appearance-none absolute top-0 left-0 outline-none opacity-0"
      :value="value"
      min="0"
      max="100"
      step="1"
      orient="vertical"
      :disabled="!isActive"
      @change.stop
      @input.stop.prevent="change"
      @mousedown="isChanging = true"
      @mouseup="isChanging = false"
      @touchstart="isChanging = true"
      @touchend="isChanging = false">
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: ['realValue', 'prevValue', 'isActive', 'color'],
  emits: ['change', 'toggle'],
  data: () => ({
    isChanging: false,
  }),
  computed: {
    bgColor() {
      const c = this.color;
      return c && this.isActive ? `rgb(${c.r}, ${c.g}, ${c.b})` : null;
    },
    value() {
      if (this.realValue || this.isChanging || !this.prevValue) return this.realValue;
      return this.prevValue;
    },
  },
  watch: {
    isChanging(isChanging) {
      if (!isChanging && !this.realValue && this.isActive) this.$emit('toggle', false);
    },
  },
  methods: {
    change(e) {
      this.$emit('change', parseInt(e.target.value, 10));
    },
  },
};
</script>

<style lang="scss" scoped>
.input-range-wrap {
  height: 23.4rem;
}
input {
  &::-webkit-slider-thumb {
    opacity: 0;
  }
  &::-moz-range-thumb {
    opacity: 0;
  }
  -webkit-appearance: slider-vertical;
}
</style>
