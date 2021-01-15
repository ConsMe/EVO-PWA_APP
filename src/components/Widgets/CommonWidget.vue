<template>
  <div
    class="w-full bg-white p-4 rounded-xl text-left flex flex-wrap content-between my-2"
    :class="{ 'min-h-40': type !== 'range' }">
    <div class="grid grid-flow-col auto-cols-auto gap-x-4 justify-between w-full">
      <div class=" tracking-0.5">
        <p class="font-semibold text-sm text-284 leading-4.07 mb-1">
          {{ name }}
        </p>
        <p class=" font-medium text-smaller text-829 leading-4">
          {{ place }}
        </p>
      </div>
      <div>
        <favourite-image
          :isFavourite="isFavourite"
          class="w-3.5 mt-1"
          @click="$emit('toggleFavourite', !isFavourite)" />
      </div>
    </div>
    <div class="mt-4 w-full">
      <div class="flex items-center" v-if="['switcher', 'range'].includes(type)">
        <switcher @toggle="$emit('toggleActive', $event)" :isActive="isActive" />
        <span
          v-if="type === 'switcher'"
          class="text-sm font-semibold"
          :class="isActive ? 'text-569' : 'text-d6e'">
          Открыто
        </span>
        <span v-else class="font-light text-2xl text-284 leading-none w-10 self-center text-center">
          {{ value }}
        </span>
        <div
          v-if="type === 'range'"
          class=" inline-block ml-2 flex-1 items-center flex">
          <input-range
            :valueInit="value"
            :isActive="isActive"
            @change="$emit('changeValue', $event)" />
        </div>
      </div>
      <div v-else-if="type === 'dimmer'">
        <dimmer />
      </div>
      <div v-else class=" flex items-end">
        <img
          v-if="type === 'degrees'"
          src="@/assets/img/degrees.svg"
          class="w-4 mr-3 inline-block">
        <span class="font-light text-2xl text-284 leading-none">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteImage from './FavouriteImage.vue';
import Switcher from '../Switcher.vue';
import InputRange from '../InputRange.vue';
import Dimmer from '../Dimmer.vue';

export default {
  props: ['name', 'place', 'isActive', 'isFavourite', 'type', 'value'],
  components: {
    FavouriteImage,
    Switcher,
    InputRange,
    Dimmer,
  },
  watch: {
    value(value) {
      if (value === 0) {
        this.$emit('toggleActive', false);
      } else if (!this.isActive) {
        this.$emit('toggleActive', true);
      }
    },
  },
};
</script>
