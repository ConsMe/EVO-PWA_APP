<template>
  <div class="flex justify-center common relative">
    <div
      class="h-44 w-44 flex relative justify-center items-center transition-opacity duration-500"
      :style="isActive ? '' : 'opacity: 0.4;'  "
      @mousedown.prevent="startSelect"
      @touchstart="startSelect"
      @contextmenu.prevent.stop
      >
      <div
        class="absolute w-full h-full rounded-full inline-block
          left-0 right-0 top-0 bottom-0 circle"
      ></div>
      <div
        class="absolute w-full h-full rounded-full inline-block
          left-0 right-0 top-0 bottom-0 selected"
        :style="{
          '-webkit-clip-path': `polygon(${clipPath})`,
          'clip-path': `polygon(${clipPath})`,
        }"
      ></div>
      <div
        class="absolute w-34 h-34 rounded-full inline-block m-auto
          left-0 right-0 top-0 bottom-0 inner"
        :style="`transform: rotate(${pointRotate + 15}deg)`"
      ></div>
      <div
        class=" absolute flex justify-left w-30"
        :style="`transform: rotate(${pointRotate}deg)`">
        <point-image class="w-1" />
      </div>
      <div class="z-10 font-light text-2.375 text-284 dark:text-c8d">
        <span v-if="isActive">{{ `${value}°` }}</span>
        <span v-else>{{ `${prevValue}°` }}</span>
        <!-- {{ `${value}°` }} -->
      </div>
      <div class=" font-normal absolute right-full top-3/4 text-608 dark:text-688">
        {{ `${min}°` }}
      </div>
      <div class=" font-normal absolute left-full top-3/4 text-dc7 dark:text-e172">
        {{ `${max}°` }}
      </div>
    </div>
    <div class=" absolute top-0 left-0 w-full h-full z-20" v-if="!isActive"></div>
  </div>
</template>

<script>
import PointImage from './PointImage.vue';

export default {
  name: 'Dimmer',
  props: ['realValue', 'prevValue', 'min', 'max', 'indexes', 'angle', 'isActive'],
  emits: ['change'],
  components: {
    PointImage,
  },
  data() {
    return {
      rect: {},
      start: { x: 0, y: 0 },
      isMoving: false,
      clipPath: '0% 0%',
      radiansK: 180 / Math.PI,
      pointRotate: -45,
      valueByDegree: 0,
    };
  },
  computed: {
    tapTrigger() { return this.$store.state.tapTrigger; },
    value() {
      if (this.realValue || this.isMoving || !this.prevValue) return this.realValue;
      return this.prevValue;
    },
  },
  watch: {
    value(value) {
      if (this.isMoving) return;
      let v = value;
      if (v < this.min) v = this.min;
      if (v > this.max) v = this.max;
      const angle = (v - this.min) / this.valueByDegree;
      this.$store.commit('setWidgetParams', {
        indexes: this.indexes,
        angle,
      });
    },
    angle(angle) {
      this.render(angle);
    },
    isMoving(isMoving) {
      if (!isMoving && !this.realValue) this.$emit('toggle', false);
    },
  },
  created() {
    this.valueByDegree = (this.max - this.min) / 270;
  },
  methods: {
    startSelect(e) {
      if (this.isMoving) return;
      this.stopSelect();
      this.isMoving = true;
      const el = e.target;
      const rect = el.getBoundingClientRect();
      rect.width = el.offsetWidth;
      rect.height = el.offsetHeight;
      rect.vec = {
        x: -rect.width / 2,
        y: -rect.height / 2,
      };
      rect.center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
      this.rect = rect;
      if (e.type === 'touchstart') {
        const touch = e.touches[0] || e.changedTouches[0];
        this.start = {
          x: touch.screenX,
          y: touch.screenY,
        };
      } else if (e.type === 'mousedown') {
        this.start = {
          x: e.x,
          y: e.y,
        };
      }
      document.addEventListener('mousemove', this.move);
      document.addEventListener('touchmove', this.move);
      document.addEventListener('mouseup', this.stopSelect);
      document.addEventListener('touchend', this.stopSelect);
      this.move(e);
    },
    move(e) {
      let x;
      let y;
      if (e.type === 'touchstart' || e.type === 'touchmove') {
        const touch = e.touches[0] || e.changedTouches[0];
        x = touch.clientX;
        y = touch.clientY;
      } else if (e.type === 'mousedown' || e.type === 'mousemove') {
        x = e.clientX;
        y = e.clientY;
      }
      const { rect } = this;
      const vec = {
        x: x - rect.center.x,
        y: rect.center.y - y,
      };
      const cos = (rect.vec.x * vec.x + rect.vec.y * vec.y)
        / (Math.sqrt(rect.vec.x ** 2 + rect.vec.y ** 2) * Math.sqrt(vec.x ** 2 + vec.y ** 2));
      let angle = Math.acos(cos) * this.radiansK;
      if (vec.x > vec.y) angle = 360 - angle;
      if (angle > 320) {
        angle = 0;
      } else if (angle > 270) {
        angle = 270;
      }
      this.$emit('change', {
        value: Math.round(angle * this.valueByDegree) + this.min,
        angle,
      });
    },
    stopSelect() {
      this.isMoving = false;
      document.removeEventListener('mousemove', this.move);
      document.removeEventListener('touchmove', this.move);
      document.removeEventListener('mouseup', this.stopSelect);
      document.removeEventListener('touchend', this.stopSelect);
    },
    render(angle) {
      if (angle < 90) {
        const p = 100 - (angle * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% ${p}%`;
      } else if (angle < 180) {
        const p = ((angle - 90) * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% 0%, ${p}% 0%`;
      } else if (angle <= 270) {
        const p = ((angle - 180) * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% 0%, 100% 0%, 100% ${p}%`;
      }
      this.pointRotate = -45 + angle;
    },
  },
};
</script>

<style lang="scss" scoped>
.common {
  touch-action: none;
}
$bg-circle: conic-gradient(
    from 180deg at 50% 50%,
    #ada9f3 0deg,
    #cae7f5 144.6deg,
    #feebe0 172.15deg,
    #ffddd3 211.88deg,
    #f8dee0 244.9deg,
    #ada9f3 360deg
  );
.circle {
  background: $bg-circle;
  opacity: 0.66;
  @supports not(background: $bg-circle) {
    background: 0 0 / 100% 100% url('/img/dimmer/circle-light.png');
    opacity: 1;
  }
  .dark & {
    background: conic-gradient(
      from 180deg at 50% 50%,
      #28264F 0deg,
      #7ED5FF 139.82deg,
      #FDC4A4 172.15deg,
      #FFB099 211.88deg,
      #FB949C 244.9deg,
      #28264F 360deg
    );
    @supports not(background: $bg-circle) {
      background: 0 0 / 100% 100% url('/img/dimmer/circle-dark.png');
    }
  }
}
.inner {
  background: linear-gradient(274.35deg, #eff6ff 3.77%, #fefeff 93.34%);
  .dark & {
    background: linear-gradient(231.55deg, #1C2E48 10.12%, #324969 85.1%);
  }
}
.selected {
  opacity: 0.66;
  background: conic-gradient(
    from 180deg at 50% 50%,
    #a7a4e4 0deg,
    #70a8f4 62.51deg,
    #d6e8e9 112.45deg,
    #f3dacd 159.26deg,
    #fad5ca 212.12deg,
    #efc5c8 272.46deg,
    #a7a4e4 360deg
  );
  @supports not(background: $bg-circle) {
    background: 0 0 / 100% auto url('/img/dimmer/selected-light.png');
    opacity: 1;
  }
  .dark & {
    opacity: 0.78;
    background: conic-gradient(
      from 180deg at 50% 50%,
      #A7A4E4 0deg,
      #3D7ED7 62.51deg,
      #7EE5EB 112.45deg,
      #FCC2A4 159.26deg,
      #F38E70 221.94deg,
      #ED7F87 293.04deg,
      #A7A4E4 360deg
    );
    @supports not(background: $bg-circle) {
      background: 0 0 / 100% auto url('/img/dimmer/selected-dark.png');
      opacity: 1;
    }
  }
}
</style>
