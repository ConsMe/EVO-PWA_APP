<template>
  <div class="text-center font-medium self-center mb-14 mt-2">
    <div class="grid grid-cols-2 gap-x-4">
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
</template>

<script>
import CommonWidget from '@/components/Widgets/CommonWidget.vue';

export default {
  name: 'Widgets',
  components: { CommonWidget },
  data() {
    return {
      widgets: [
        {
          type: 'range',
          name: 'Длинное название уст-ва',
          group: 'Группа (помещение)',
          isActive: true,
          isFavourite: false,
          value: 50,
        },
        {
          type: 'switcher',
          name: 'Название уст-ва на 3 строчки',
          group: 'Гостиничный номер',
          isActive: false,
          isFavourite: false,
        },
        {
          type: 'degrees',
          name: 'Widget Tap',
          group: 'Гостиничный номер',
          value: '50°C',
          isFavourite: false,
        },
        {
          type: 'string',
          name: 'Название уст-ва ',
          group: 'Комната',
          value: '24%',
          isFavourite: false,
        },
        {
          type: 'dimmer',
          name: 'Длинное название уст-ва',
          group: 'Группа (помещение)',
          isActive: true,
          isFavourite: false,
          value: 50,
        },
        {
          type: 'color',
          name: 'Длинное название уст-ва',
          group: 'Группа (помещение)',
          isActive: true,
          isFavourite: false,
          value: 50,
          color: { r: 255, g: 255, b: 255 },
        },
      ],
    };
  },
};
</script>
