<template>
  <div
    class="inline-flex items-center"
    @click="$emit('toggle', !isActive)"
  >
    <div
      class="w-11 h-6 flex items-center bg-gray-300 dark:bg-41587 rounded-full
        p-1 duration-300 ease-in-out mr-2"
      :class="{ 'bg-blue-gradient': isActive }"
    >
      <div
        class="bg-white dark:bg-23354 w-1.125 h-1.125 rounded-full shadow-md
          transform duration-300 ease-in-out"
        :class="{ 'translate-x-1.125': isActive }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  props: ['isActive'],
  emits: ['toggle'],
};
</script>

<style lang="postcss" scoped>
.bg-blue-gradient {
  background: linear-gradient(
    180deg, #4A9EFE -28.21%, #3C77D6 132.18%, #6AA3FC 135.9%, #6AA3FC 135.9%
  );
}
</style>
