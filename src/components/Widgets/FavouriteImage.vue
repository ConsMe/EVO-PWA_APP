<template>
  <!-- eslint-disable max-len -->
  <svg
    width="13"
    height="18"
    viewBox="0 0 13 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 0.643244C0 0.287991 0.28799 0 0.643243 0H12.3568C12.712 0 13 0.28799 13 0.643243V16.4996C13 17.0651 12.3228 17.3554 11.9133 16.9655L6.9435 12.2347C6.69511 11.9982 6.30489 11.9982 6.0565 12.2347L1.08675 16.9655C0.67718 17.3554 0 17.0651 0 16.4996V0.643244Z"
      :fill="isFavourite ? 'url(#paint0_linear)' : null"
      :class="[isFavourite ? '' : 'fill-current', color]"
    />
    <defs v-if="isFavourite">
      <linearGradient
        id="paint0_linear"
        x1="6.46369"
        y1="-5.07692"
        x2="6.46373"
        y2="24.4615"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A9EFE" />
        <stop offset="0.977354" stop-color="#3C77D6" />
        <stop offset="1" stop-color="#6AA3FC" />
        <stop offset="1" stop-color="#6AA3FC" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'FavouriteImage',
  props: ['isFavourite', 'isWhite', 'isQuickNav'],
  computed: {
    color() {
      if (this.isQuickNav) {
        return this.isWhite ? 'text-white' : 'text-d6e dark:text-829';
      }
      return 'text-d6e dark:text-4158';
    },
  },
};
</script>
