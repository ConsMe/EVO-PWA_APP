<template>
  <div class=" relative h-2.125 rounded-lg overflow-hidden bg-f0f
    dark:bg-41587 inline-block w-full p-1">
    <div class="h-full relative">
      <div
        class=" absolute top-0 left-0 h-full rounded range-line transition-colors duration-500"
        :class="isActive ? 'bg-white' : 'bg-d6e dark:bg-23354'"
        :style="{ width: `${value}%`, backgroundColor: bgColor }"></div>
    </div>
    <input
      type="range"
      class="h-full w-full appearance-none absolute top-0 left-0 bg-transparent outline-none"
      :value="value"
      min="0"
      max="100"
      step="1"
      :disabled="!isActive"
      @change.stop
      @input.stop.prevent="change"
      @mousedown="isChanging = true"
      @mouseup="isChanging = false">
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
      if (!isChanging && !this.realValue) this.$emit('toggle', false);
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
input {
  &::-webkit-slider-thumb {
    opacity: 0;
  }
  &::-moz-range-thumb {
    opacity: 0;
  }
}
</style>
