<template>
  <div class=" justify-items-center w-5/6 text-center" v-if="widget.widget_id">
    <div class="h-1.625"></div>
    <div class=" flex items-center w-full justify-between">
      <back-button class="w-3.25 min-w-3.25 back-btn mr-3" @click="back" />
      <p class=" font-semibold text-lg text-284 dark:text-c8d text-center">
        {{ widget.naim || '' }}
      </p>
      <span
        class=" w-3.25 h-3.25 min-w-3.25 bg-white dark:bg-23354 rounded-625 favourite flex
          items-center justify-center ml-3">
        <favourite-image :isFavourite="widget.isFavourite || false" />
      </span>
    </div>
    <div>
      <div v-if="widget.widget_type_naim === 'bar_button'" class=" mt-9 mb-8">
        <div>
          <input-range
            :realValue="widget.value"
            :prevValue="prevValue"
            :isActive="widget.isActive"
            @change="setRangeValue"
            @toggle="toggleSwitcher" />
        </div>
        <p class=" text-center font-light text-3.5 mt-12 text-284 dark:text-c8d">
          {{ widget.value }}
        </p>
      </div>
      <div v-else class="mt-5.75 mb-56">
        <dimmer
          v-bind="widget"
          :realValue="widget.value"
          :prevValue="prevValue"
          :isSingle="true"
          @change="setDimmerValue"
          @toggle="toggleSwitcher" />
      </div>
      <button
          class="w-full h-14 text-white dark:text-c8d font-semibold
            focus:outline-none"
          :class="widget.isActive ? 'button-gradient' : 'button-off-gradient'"
          @click="toggleSwitcher(!widget.isActive)">
          {{ widget.isActive ? 'Включено' : 'Выключено' }}
        </button>
    </div>
  </div>
  <spinner v-else class="w-10" />
</template>

<script>
import BackButton from '@/components/SingleWidget/BackButton.vue';
import FavouriteImage from '@/components/Widgets/FavouriteImage.vue';
import InputRange from '@/components/InputRangeVertical.vue';
import Spinner from '@/components/Spinner.vue';
import Dimmer from '@/components/Dimmer.vue';

export default {
  name: 'SingleWidget',
  components: {
    BackButton,
    FavouriteImage,
    InputRange,
    Spinner,
    Dimmer,
  },
  data: () => ({
  }),
  computed: {
    widgets() { return this.$store.state.widgets; },
    widget() {
      const widget = this.widgets.find((w) => w.widget_id === this.$route.params.id);
      if (!widget) return {};
      return widget;
    },
    isFirstLoaded() { return this.$store.state.isFirstLoaded; },
    prevValue() {
      return this.$store.state.prevValues[this.widget.widget_id] || 0;
    },
  },
  watch: {
    isFirstLoaded: {
      handler(isFirstLoaded) {
        if (isFirstLoaded) {
          if (this.widgets.length) {
            this.checkIfWidgetAvailable();
          } else {
            const unwatch = this.$watch('widgets', () => {
              unwatch();
              this.checkIfWidgetAvailable();
            });
          }
        }
      },
      immediate: true,
    },
  },
  methods: {
    checkIfWidgetAvailable() {
      if (!this.widget) this.$router.push({ name: 'Groups' });
    },
    setDimmerValue({ value, angle }) {
      this.$store.dispatch('setWidgetParams', {
        indexes: this.widget.indexes,
        value,
        angle,
      });
    },
    setRangeValue(value) {
      this.$store.dispatch('setWidgetParams', {
        indexes: this.widget.indexes,
        value,
      });
    },
    toggleSwitcher(isActive) {
      let value = +isActive;
      if (['bar_button', 'temp_regulator_button'].includes(this.widget.widget_type_naim)) {
        if (!isActive) {
          this.$store.commit('setPrevValue', {
            widgetId: this.widget.widget_id,
            value: this.widget.value,
          });
        } else if (this.prevValue) {
          value = this.prevValue;
        }
      }
      if (value !== this.value) this.setRangeValue(value);
      this.$store.commit('setWidgetParams', {
        indexes: this.widget.indexes,
        isActive,
      });
    },
    back() {
      const hasBack = window.history.state.back && window.history.state.back.indexOf('http') < 0;
      if (!hasBack) {
        this.$router.push({ name: 'Groups' });
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.favourite:active, .back-btn:active {
  box-shadow: 0px 0px 15px #EAEDF6;
  .dark & {
    box-shadow: 0px 0px 15px #152439;
  }
}
</style>
