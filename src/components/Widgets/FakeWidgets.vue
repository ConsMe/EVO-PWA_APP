<template>
  <div
    class="w-full bg-white p-4 rounded-xl text-left flex
      flex-wrap content-between my-2 dark:bg-23354 min-h-40 skeleton-box"
    v-for="i in 2"
    :key="i">
    <div class="grid grid-flow-col auto-cols-auto gap-x-4 justify-between w-full">
      <div class=" tracking-0.5 break-word">
        <p class="font-semibold text-sm text-284 dark:text-c8d leading-4.07 mb-1 skeleton">
          {{  i === 1 ? 'small' : 'This a some text'}}
        </p>
        <p class=" font-medium text-smaller text-829 leading-4 skeleton">
          {{  i === 1 ? 'And decription' : 'small'}}
        </p>
      </div>
      <div>
        <div
          class="w-3.5 h-1.125 skeleton" />
      </div>
    </div>
    <div class="mt-4 w-full">
      <div class="flex items-center">
        <div class=" w-11 h-6 inline-block mr-2 skeleton"></div>
        <span
          class="text-sm font-semibold skeleton">
          Открыто
        </span>
      </div>
    </div>
  </div>
  <!-- <div
    class="w-full bg-white p-4 rounded-xl text-left flex
      flex-wrap content-between my-2 dark:bg-23354 min-h-40 skeleton-box"
    v-for="i in 2"
    :key="i">
    <div class="grid grid-flow-col auto-cols-auto gap-x-4 justify-between w-full">
      <div class=" tracking-0.5 break-word">
        <p class="font-semibold text-sm text-284 dark:text-c8d leading-4.07 mb-1 skeleton">
          {{  i === 2 ? 'small' : 'This a some text'}}
        </p>
        <p class=" font-medium text-smaller text-829 leading-4 skeleton">
          {{  i === 2 ? 'And decription' : 'small'}}
        </p>
      </div>
      <div>
        <div
          class="w-3.5 h-1.125 skeleton" />
      </div>
    </div>
    <div class="mt-4 w-full">
      <div class=" flex items-end">
        <div
          v-if="i === 1"
          class="w-4 h-7 mr-3 inline-block skeleton">
        </div>
        <span class="font-light text-2xl text-284 leading-none dark:text-c8d skeleton">
          {{ i ===1 ? '24°C' : '59%' }}
        </span>
      </div>
    </div>
  </div> -->
  <div
    class="w-full bg-white p-4 rounded-xl text-left flex
      flex-wrap content-between my-2 dark:bg-23354 skeleton-box col-span-2">
    <div class="grid grid-flow-col auto-cols-auto gap-x-4 justify-between w-full">
      <div class=" tracking-0.5 break-word">
        <p class="font-semibold text-sm text-284 dark:text-c8d leading-4.07 mb-1 skeleton">
          This a some text
        </p>
        <p class=" font-medium text-smaller text-829 leading-4 skeleton">
          And decription
        </p>
      </div>
      <div>
        <div
          class="w-3.5 h-1.125 skeleton" />
      </div>
    </div>
    <div class="mt-4 w-full">
      <div class=" flex items-center">
        <div
          class="w-11 h-6 mr-2 inline-flex skeleton">
        </div>
        <div
          class="w-11 h-6 mr-2 inline-block skeleton">
        </div>
        <div
          class="w-11 h-2.125 mr-2 skeleton flex-1">
        </div>
      </div>
    </div>
  </div>
</template>
