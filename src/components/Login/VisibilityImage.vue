<template>
  <!-- eslint-disable max-len -->
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-if="!isVisible"
  >
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0938 17.9612C11.3869 17.9871 11.6892 18.0007 12.0007 18.0007C16.9098 18.0007 21.0007 12.0007 21.0007 12.0007C21.0007 12.0007 20.3306 11.0178 19.2073 9.84766L11.0938 17.9612Z"
      :class="['fill-current', color]"
    />
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5051 6.49485C13.7076 6.18695 12.8665 6 12 6C5.45455 6 3 12 3 12C3 12 3.75006 13.8335 5.52661 15.4734L9 12C9 10.3431 10.3431 9 12 9L14.5051 6.49485Z"
      :class="['fill-current', color]"
    />
    <rect
      opacity="0.7"
      x="5.09961"
      y="18.4336"
      width="19"
      height="2"
      transform="rotate(-45 5.09961 18.4336)"
      :class="['fill-current', color]"
    />
  </svg>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-else
  >
    <path
      opacity="0.3"
      d="M3 12C3 12 5.45455 6 12 6C16.9091 6 21 12 21 12C21 12 16.9091 18 12 18C5.45455 18 3 12 3 12Z"
      :class="['fill-current', color]"
    />
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"
      :class="['fill-current', color]"
    />
  </svg>
</template>

<script>
export default {
  props: ['isVisible', 'isError'],
  computed: {
    color() {
      return this.isError ? 'text-5860' : 'text-829';
    },
  },
};
</script>
