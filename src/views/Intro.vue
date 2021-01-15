<template>
  <div class="w-5/6 text-center font-medium self-center my-14">
    <div class="grid grid-cols-2 gap-x-4">
      <common-widget
        v-for="(w, i) in widgets"
        :key="i"
        v-bind="w"
        @toggleActive="widgets[i].isActive = $event"
        @toggleFavourite="widgets[i].isFavourite = $event"
        @changeValue="widgets[i].value = $event"
        :class="{ 'col-span-2': ['range', 'dimmer'].includes(w.type) }"
          />
    </div>
  </div>
</template>

<script>
import CommonWidget from '@/components/Widgets/CommonWidget.vue';

export default {
  components: { CommonWidget },
  data() {
    return {
      widgets: [
        {
          type: 'range',
          name: 'Длинное название уст-ва',
          place: 'Группа (помещение)',
          isActive: true,
          isFavourite: false,
          value: 50,
        },
        {
          type: 'switcher',
          name: 'Название уст-ва на 3 строчки',
          place: 'Гостиничный номер',
          isActive: false,
          isFavourite: false,
        },
        {
          type: 'degrees',
          name: 'Widget Tap',
          place: 'Гостиничный номер',
          value: '50°C',
          isFavourite: false,
        },
        {
          type: 'string',
          name: 'Название уст-ва ',
          place: 'Комната',
          value: '24%',
          isFavourite: false,
        },
        {
          type: 'dimmer',
          name: 'Длинное название уст-ва',
          place: 'Группа (помещение)',
          isActive: true,
          isFavourite: false,
          value: 50,
        },
      ],
    };
  },
};
</script>
