<template>
  <!-- eslint-disable max-len -->
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3.66602"
      y="3.66797"
      width="6.41667"
      height="6.41667"
      rx="1.5"
      :class="['fill-current', !isActive ? 'text-d6e' : 'text-white']"
    />
    <path
      opacity="0.7"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.916 5.16797C11.916 4.33954 12.5876 3.66797 13.416 3.66797H16.8327C17.6611 3.66797 18.3327 4.33954 18.3327 5.16797V8.58464C18.3327 9.41306 17.6611 10.0846 16.8327 10.0846H13.416C12.5876 10.0846 11.916 9.41306 11.916 8.58464V5.16797ZM3.66602 13.418C3.66602 12.5895 4.33759 11.918 5.16602 11.918H8.58268C9.41111 11.918 10.0827 12.5895 10.0827 13.418V16.8346C10.0827 17.6631 9.41111 18.3346 8.58268 18.3346H5.16601C4.33759 18.3346 3.66602 17.6631 3.66602 16.8346V13.418ZM13.416 11.918C12.5876 11.918 11.916 12.5895 11.916 13.418V16.8346C11.916 17.6631 12.5876 18.3346 13.416 18.3346H16.8327C17.6611 18.3346 18.3327 17.6631 18.3327 16.8346V13.418C18.3327 12.5895 17.6611 11.918 16.8327 11.918H13.416Z"
      :class="['fill-current', !isActive ? 'text-d6e' : 'text-white']"
    />
  </svg>
</template>

<script>
export default {
  name: 'GroupsImage',
  props: ['isActive'],
};
</script>
