<template>
  <div class="w-5/6 text-center font-medium self-center">
    <img src="@/assets/img/EVO_Logo.svg" class="w-12 inline-block mb-14">
    <p class="text-xl text-829 mb-10">
      Введите логин и пароль
    </p>
    <form>
      <input
        type="text"
        placeholder="Логин"
        class="mb-6 input-field dark:bg-1b2 rounded-none"
        :class="[getColor('login')]"
        v-model="login"
        required>
      <div class="w-full relative">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Пароль"
          class="input-field dark:bg-1b2 rounded-none"
          :class="[getColor('password')]"
          v-model="password"
          @focus="isPasswordFocus = true"
          @blur="isPasswordFocus = false"
          required>
        <span
          class=" absolute right-2 h-6 top-0 bottom-0 my-auto"
          @click="isPasswordVisible = !isPasswordVisible">
          <visibility-image
            :isVisible="isPasswordVisible"
            :isError="isError"
            :isPasswordFocus="isPasswordFocus"
            :password="password"
            class=" h-full" />
        </span>
      </div>
      <p class="text-5860 text-sm flex items-end mt-2" :class="{ invisible: !isError }">
        <img src="@/assets/img/warning.svg" class=" w-5 inline-block mr-2 self-baseline">
        <span class="leading-none">
          Ошибка входа. Проверьте логин и пароль.
        </span>
      </p>
      <button
        class="w-full h-14 text-white mt-5 font-semibold button-gradient active:outline-none">
        Войти
        <img src="@/assets/img/arrow-right.svg" class=" inline-block h-6">
      </button>
      <label class="flex items-end mt-5">
        <input type="checkbox" class="form-checkbox">
        <span class="ml-2 text-sm text-284 dark:text-c8d leading-none">Запомнить</span>
      </label>
    </form>
  </div>
</template>

<script>
import VisibilityImage from '@/components/Login/VisibilityImage.vue';

export default {
  components: { VisibilityImage },
  data() {
    return {
      login: '',
      password: '',
      isPasswordVisible: false,
      isError: false,
      isPasswordFocus: false,
    };
  },
  computed: {
    logPass() { return `${this.login}${this.password}`; },
    isDarkTheme() { return this.$store.state.isDarkTheme; },
  },
  watch: {
    logPass() { this.isError = false; },
  },
  methods: {
    getColor(type) {
      if (this.isError) return 'border-5860 error';
      if (this[type].length) return 'border-284 dark:border-c8d';
      return 'border-829 focus:border-284 dark:focus:border-c8d';
    },
  },
};
</script>

<style lang="postcss" scoped>
.input-field {
  @apply text-lg text-284 dark:text-c8d placeholder-829 font-medium font-gilroy block w-full
  outline-none py-3.5 border-b-2 transition;
}
.input-field.error {
  @apply text-5860;
}
.input-field:-webkit-autofill,
.input-field:-webkit-autofill:hover,
.input-field:-webkit-autofill:focus {
  box-shadow: 0 0 0 30px white inset !important;
  transition: background-color 5000s ease-in-out 0s;
}
.input-field:-webkit-autofill::first-line {
  @apply text-284 text-lg font-medium font-gilroy;
}
.input-field.error:-webkit-autofill::first-line {
  @apply text-5860;
}
.form-checkbox {
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: transparent;
  border-width: 1px;
  border-radius: 0.1875rem;
  @apply border-284 outline-none;
  .dark & {
    border-color: #C8DAF2;
  }
}
.form-checkbox:checked {
  position: relative;
  border-color: transparent;
  background-image: linear-gradient(white, white),
                    linear-gradient(to bottom, #51A2FF, #316ED0);
  background-origin: border-box;
  background-clip: content-box, border-box;
  .dark & {
    background-image: linear-gradient(#1B2A40, #1B2A40),
                    linear-gradient(to bottom, #51A2FF, #316ED0);
  }
}
.form-checkbox:checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  content: '';
  background-image: url('~@/assets/img/check.svg');
  background-size: 0.625rem auto;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
