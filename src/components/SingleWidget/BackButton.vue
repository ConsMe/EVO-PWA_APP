<template>
  <!-- eslint-disable max-len -->
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="52" height="52" rx="10" class=" fill-current text-white dark:text-23354" />
    <path
      d="M29.7071 20.7071C30.0976 20.3166 30.0976 19.6834 29.7071 19.2929C29.3166 18.9024 28.6834 18.9024 28.2929 19.2929L22.2929 25.2929C21.9143 25.6715 21.9011 26.2811 22.2628 26.6757L27.7628 32.6757C28.136 33.0828 28.7686 33.1103 29.1757 32.7372C29.5828 32.364 29.6103 31.7314 29.2372 31.3243L24.3841 26.0301L29.7071 20.7071Z"
      class="fill-current text-284 dark:text-41587"
    />
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="7.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.917647 0 0 0 0 0.929412 0 0 0 0 0.964706 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="34.7436"
        y1="40.9609"
        x2="47.8718"
        y2="40.9609"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4A9EFE" />
        <stop offset="0.977354" stop-color="#3C77D6" />
        <stop offset="1" stop-color="#6AA3FC" />
        <stop offset="1" stop-color="#6AA3FC" />
      </linearGradient>
      <linearGradient id="MyGradient">
        <stop offset="0%" stop-color="#284A69" />
        <stop offset="100%" stop-color="#284A69" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
svg:active > path {
  fill: url(#paint0_linear);
}
</style>
