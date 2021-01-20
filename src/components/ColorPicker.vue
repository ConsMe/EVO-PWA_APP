<template>
  <div class="justify-center">
    <div
      ref="picker"
      class=" flex justify-center transition-opacity relative"
      :style="isActive ? '' : 'opacity: 0.4;'  ">
      <div class=" absolute top-0 left-0 w-full h-full" v-if="!isActive"></div>
    </div>
    <div class="mt-7 w-full">
      <div class="flex items-center">
        <switcher @toggle="$emit('toggle', $event)" :isActive="isActive" />
        <span
          class="font-light text-2xl text-284 dark:text-c8d leading-none
            w-10 self-center text-center">
          {{ value }}
        </span>
        <div
          class=" inline-block ml-2 flex-1 items-center flex">
          <input-range
            :valueInit="value"
            :isActive="isActive"
            :color="colorInit"
            @change="changeValue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iro from '@/assets/js/iro';
import Switcher from './Switcher.vue';
import InputRange from './InputRange.vue';

export default {
  name: 'ColorPicker',
  props: ['valueInit', 'colorInit', 'isActive'],
  components: { Switcher, InputRange },
  data() {
    return {
      colorPicker: null,
      pxInRem: parseInt(getComputedStyle(document.documentElement).fontSize, 10),
      color: { r: 255, g: 255, b: 255 },
      value: 0,
    };
  },
  created() {
    if (this.valueInit !== undefined) this.value = this.valueInit;
  },
  mounted() {
    if (this.colorInit !== undefined) this.color = this.colorInit;
    this.colorPicker = new iro.ColorPicker(this.$refs.picker, {
      width: 11.875 * this.pxInRem,
      handleRadius: 0.75 * this.pxInRem,
    });
    this.colorPicker.on('color:change', (color) => {
      // console.log(color);
      this.$emit('pick', color.rgb);
    });
  },
  beforeUnmount() {

  },
  methods: {
    changeValue(e) {
      this.value = e;
      this.$emit('change', e);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
