<template>
  <div class=" relative h-2.125 rounded-lg overflow-hidden bg-f0f
    dark:bg-41587 inline-block w-full p-1">
    <div class="h-full relative">
      <div
        class=" absolute top-0 left-0 h-full rounded range-line"
        :class="isActive ? 'bg-white' : 'bg-d6e dark:bg-23354'"
        :style="{ width: `${value}%`, backgroundColor: bgColor }"></div>
    </div>
    <input
      type="range"
      class="h-full w-full appearance-none absolute top-0 left-0 bg-transparent outline-none"
      v-model="value"
      min="0"
      max="100"
      step="1"
      :disabled="!isActive"
      @change.stop
      @input.stop>
  </div>
</template>

<script>
export default {
  name: 'InputRange',
  props: ['valueInit', 'isActive', 'color'],
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    bgColor() {
      const c = this.color;
      return c && this.isActive ? `rgb(${c.r}, ${c.g}, ${c.b})` : null;
    },
  },
  mounted() {
    this.value = this.valueInit;
  },
  watch: {
    value(nv, ov) {
      if (ov !== undefined) this.$emit('change', parseInt(nv, 10));
    },
  },
  methods: {

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
.range-line {
  transition: background-color 0.1s ease;
}
</style>
