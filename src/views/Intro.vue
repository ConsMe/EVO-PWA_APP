<template>
  <div class="w-full flex flex-col justify-center">
    <div ref="slider" class="swipe">
      <div class="swipe-wrap flex items-center">
        <div class=" w-full">
          <div class="grid grid-cols-2 gap-x-4 w-full transform scale-75">
            <common-widget
              v-for="(w, i) in widgets"
              :key="i"
              v-bind="w"
              @toggleActive="widgets[i].isActive = $event"
              @toggleFavourite="widgets[i].isFavourite = $event"
              @changeValue="widgets[i].value = $event"
              @changeColor="widgets[i].color = $event"
              :class="{ 'col-span-2': ['range', 'dimmer', 'color'].includes(w.type) }"
                />
          </div>
        </div>
        <div class=" w-full">
          <dimmer :valueInit="28" :disabled="true" />
        </div>
        <div class=" w-full">
          <img v-if="isDarkTheme" src="@/assets/img/intro_slide3-dark.png" class=" w-4/5 m-auto">
          <img v-else src="@/assets/img/intro_slide3.png" class=" w-4/5 m-auto">
        </div>
      </div>
    </div>
    <div class=" text-center">
      <slider-dot
        v-for="i in 3"
        :key="i"
        class=" inline-block mx-0.5"
        :isActive="i === slideNum" />
    </div>
    <div class="mt-16 text-center">
      <transition name="fade" mode="out-in">
        <div v-if="slideNum === 1">
          <h1 class=" text-284 dark:text-c8d text-xl font-semibold text-center">
            Всё на одном экране
          </h1>
          <p class="text-sm text-829 font-medium text-center mt-3 h-24">
            <span class="w-4/5 inline-block">
              Вы можете легко добавлять виджеты на панель “Избранное”, отслеживать
              показатели и регулировать девайсы в помещении всего за несколько секунд.
            </span>
          </p>
        </div>
        <div v-else-if="slideNum === 2">
          <h1 class=" text-284 dark:text-c8d text-xl font-semibold text-center">
            Легко отслеживать и управлять
          </h1>
          <p class="text-sm text-829 font-medium text-center mt-3 h-24">
            <span class="w-4/5 inline-block">
              Управляйте девайсами на панелях “Избранное” и “Группы”.
              Отрегулировать температуру и освещение можно как в виджетах,
              так и на отдельных страницах.
            </span>
          </p>
        </div>
        <div v-else>
          <h1 class=" text-284 dark:text-c8d text-xl font-semibold text-center">
            Погода за окном и контроллер
          </h1>
          <p class="text-sm text-829 font-medium text-center mt-3 h-24">
            <span class="w-4/5 inline-block">
              В верхней панели отображена актуальная информация о погоде и
              статусе контроллера в реальном времени.
            </span>
          </p>
        </div>
      </transition>
      <button
        class="w-10/12 h-14 text-white mt-5 font-semibold button-gradient mt-8
          focus:outline-none"
        @click="nextSlide">
        Продолжить
      </button>
    </div>
  </div>
</template>

<script>
import Swipe from 'swipejs';
import CommonWidget from '@/components/Widgets/CommonWidget.vue';
import Dimmer from '../components/Dimmer.vue';
import SliderDot from '../components/Intro/SliderDot.vue';

export default {
  components: { CommonWidget, Dimmer, SliderDot },
  data() {
    return {
      slider: null,
      slideNum: 1,
      widgets: [
        {
          type: 'degrees',
          name: 'Конвектор',
          group: 'Гостиная',
          value: '50°C',
          isFavourite: true,
        },
        {
          type: 'switcher',
          name: 'Ворота, второй въезд',
          group: 'Паркинг',
          isActive: true,
          isFavourite: true,
        },
        {
          type: 'range',
          name: 'Освещение',
          group: 'Прихожая',
          isActive: true,
          isFavourite: true,
          value: 100,
        },
      ],
    };
  },
  computed: {
    isDarkTheme() { return this.$store.state.isDarkTheme; },
  },
  mounted() {
    this.slider = new Swipe(this.$refs.slider, {
      continuous: false,
      callback: (index) => {
        // if (this.slideNum === 3) {
        //   this.$router.push({ name: 'Groups' });
        //   this.slider.kill();
        //   return false;
        // }
        this.slideNum = index + 1;
        return true;
      },
    });
  },
  beforeUnmount() {
    this.slider.kill();
  },
  methods: {
    nextSlide() {
      if (this.slideNum < 3) {
        this.slider.next();
      } else {
        this.$router.push({ name: 'Groups' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float: left;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
