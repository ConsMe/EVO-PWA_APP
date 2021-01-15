<template>
  <div class="flex justify-center common">
    <div
      class="h-44 w-44 inline-block relative"
      @mousedown.prevent="startSelect"
      @touchstart="startSelect"
      >
      <div
        class="absolute w-full h-full rounded-full inline-block
          left-0 right-0 top-0 bottom-0 circle"
      ></div>
      <div
        class="absolute w-full h-full rounded-full inline-block
          left-0 right-0 top-0 bottom-0 selected"
        :style="`clip-path: polygon(${clipPath});`"
      ></div>
      <div
        class="absolute w-34 h-34 rounded-full inline-block m-auto
          left-0 right-0 top-0 bottom-0 inner"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rect: {},
      start: { x: 0, y: 0 },
      isMoving: false,
      clipPath: '0% 0%',
      radiansK: 180 / Math.PI,
    };
  },
  computed: {
    tapTrigger() { return this.$store.state.tapTrigger; },
  },
  methods: {
    startSelect(e) {
      this.stopSelect();
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
      if (angle < 90) {
        const p = 100 - (angle * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% ${p}%`;
      } else if (angle < 180) {
        const p = ((angle - 90) * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% 0%, ${p}% 0%`;
      } else if (angle < 270) {
        const p = ((angle - 180) * 100) / 90;
        this.clipPath = `50% 50%, 0% 100%, 0% 0%, 100% 0%, 100% ${p}%`;
      }
    },
    stopSelect() {
      document.removeEventListener('mousemove', this.move);
      document.removeEventListener('touchmove', this.move);
      document.removeEventListener('mouseup', this.stopSelect);
      document.removeEventListener('touchend', this.stopSelect);
    },
  },
};
</script>

<style lang="scss" scoped>
.common {
  touch-action: none;
}
.circle {
  background: conic-gradient(
    from 180deg at 50% 50%,
    #ada9f3 0deg,
    #cae7f5 144.6deg,
    #feebe0 172.15deg,
    #ffddd3 211.88deg,
    #f8dee0 244.9deg,
    #ada9f3 360deg
  );
}
.inner {
  background: linear-gradient(274.35deg, #eff6ff 3.77%, #fefeff 93.34%);
}
.selected {
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
}
</style>
