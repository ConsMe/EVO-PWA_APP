<template>
  <!-- eslint-disable max-len -->
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="10.832"
      width="15"
      height="5.83333"
      rx="2"
      :class="['fill-current', isOnline ? 'text-569' : 'text-d6e']"
    />
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.7734 6.88016L17.0559 5.81574C15.3254 3.73077 12.7619 2.5 9.99907 2.5C7.24009 2.5 4.67971 3.72735 2.94922 5.80738L4.23046 6.87331C5.64758 5.16995 7.74052 4.16667 9.99907 4.16667C12.2607 4.16667 14.3563 5.17275 15.7734 6.88016ZM13.2155 9.01754L14.5014 7.95721C13.4006 6.62224 11.7634 5.83295 9.99893 5.83295C8.24025 5.83295 6.60788 6.61704 5.50695 7.94453L6.78984 9.00847C7.57741 8.05882 8.7416 7.49962 9.99893 7.49962C11.2604 7.49962 12.428 8.06254 13.2155 9.01754Z"
      :class="['fill-current', isOnline ? 'text-569' : 'text-d6e']"
    />
  </svg>
</template>

<script>
export default {
  name: 'RouterImage',
  props: ['isOnline'],
};
</script>
