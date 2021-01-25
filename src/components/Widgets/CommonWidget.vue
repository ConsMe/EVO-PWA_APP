<template>
  <div
    class="w-full bg-white p-4 rounded-xl text-left flex
      flex-wrap content-between my-2 dark:bg-23354"
    :class="{ 'min-h-40': type !== 'range' }">
    <div class="grid grid-flow-col auto-cols-auto gap-x-4 justify-between w-full">
      <div class=" tracking-0.5 break-word">
        <p class="font-semibold text-sm text-284 dark:text-c8d leading-4.07 mb-1">
          {{ name }}
        </p>
        <p class=" font-medium text-smaller text-829 leading-4">
          {{ group }}
        </p>
      </div>
      <div>
        <favourite-image
          :isFavourite="isFavourite"
          class="w-3.5 mt-1"
          @click="toggleFavourite" />
      </div>
    </div>
    <div class="mt-4 w-full">
      <div class="flex items-center" v-if="['switcher', 'range'].includes(type)">
        <switcher @toggle="toggleSwitcher" :isActive="isActive" />
        <span
          v-if="type === 'switcher'"
          class="text-sm font-semibold"
          :class="isActive ? 'text-569' : 'text-d6e'">
          Открыто
        </span>
        <span
          v-else
          class="font-light text-2xl text-284 leading-none w-10 self-center
            text-center dark:text-c8d">
          <span v-if="isActive">{{ value }}</span>
          <span v-else>{{ prevValue }}</span>
        </span>
        <div
          v-if="type === 'range'"
          class=" inline-block ml-2 flex-1 items-center flex">
          <input-range
            :realValue="value"
            :prevValue="prevValue"
            :isActive="isActive"
            @change="setRangeValue"
            @toggle="toggleSwitcher" />
        </div>
      </div>
      <div v-else-if="type === 'dimmer'">
        <dimmer
          v-bind="$props"
          :realValue="value"
          :prevValue="prevValue"
          @change="setDimmerValue"
          @toggle="toggleSwitcher" />
        <div class=" text-center">
          <switcher @toggle="toggleSwitcher" :isActive="isActive" class=" mt-5" />
        </div>
      </div>
      <div v-else-if="type === 'color'">
        <color-picker
          :valueInit="value"
          :isActive="isActive"
          :colorInit="color"
          @change="$emit('changeValue', $event)"
          @toggle="$emit('toggleActive', $event)"
          @pick="$emit('changeColor', $event)"
           />
      </div>
      <div v-else class=" flex items-end">
        <img
          v-if="type === 'degrees'"
          src="@/assets/img/degrees.svg"
          class="w-4 mr-3 inline-block">
        <span class="font-light text-2xl text-284 leading-none dark:text-c8d">
          {{ valueString }}
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
import ColorPicker from '../ColorPicker.vue';

export default {
  name: 'CommonWidget',
  props: [
    'name',
    'group',
    'isActive',
    'isFavourite',
    'type',
    'value',
    'color',
    'min',
    'max',
    'indexes',
    'angle',
    'widget_id',
    'widget_type_naim',
  ],
  components: {
    FavouriteImage,
    Switcher,
    InputRange,
    Dimmer,
    ColorPicker,
  },
  data() {
    return {
      disabled: false,
    };
  },
  computed: {
    valueString() {
      if (this.widget_type_naim === 'tap_button') return `${this.value}°C`;
      return this.widget_type_naim === 'percent_button' ? `${this.value}%` : this.value;
    },
    prevValue() {
      return this.$store.state.prevValues[this.widget_id] || 0;
    },
  },
  methods: {
    toggleFavourite() {
      // if (this.disabled) return;
      // this.disabled = true;
      // this.$store.dispatch('toggleFavourite', {
      //   widget
      //  });
    },
    setDimmerValue({ value, angle }) {
      this.$store.dispatch('setWidgetParams', {
        indexes: this.indexes,
        value,
        angle,
      });
    },
    setRangeValue(value) {
      this.$store.dispatch('setWidgetParams', {
        indexes: this.indexes,
        value,
      });
    },
    toggleSwitcher(isActive) {
      let value = +isActive;
      if (['bar_button', 'temp_regulator_button'].includes(this.widget_type_naim)) {
        if (!isActive) {
          this.$store.commit('setPrevValue', { widgetId: this.widget_id, value: this.value });
        } else if (this.prevValue) {
          value = this.prevValue;
        }
      }
      if (value !== this.value) this.setRangeValue(value);
      this.$store.commit('setWidgetParams', {
        indexes: this.indexes,
        isActive,
      });
    },
  },
};
</script>
