<template>
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="3"
      cy="3"
      r="3"
      class="fill-current transition-colors duration-500"
      :class="isActive ? 'text-284 dark:text-c8d' : 'text-d6e dark:text-41587'" />
  </svg>
</template>

<script>
export default {
  name: 'SliderDot',
  props: ['isActive'],
};
</script>
