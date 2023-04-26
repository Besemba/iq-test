<template>
  <div class="processing-page">
    <page-header :is-main-page="false" :text="'ТЕСТ ПО ОПРЕДЕЛЕНИЮ IQ'" />
    <header-menu />
    <section class="section-processing">
      <div class="processing container">
        <ProgressBar
          :value="progressBarValue"
          :showValue="false"
          class="container"
        />
        <div class="processing__content">
          <h1 class="processing__heading">Обработка результатов</h1>
          <loading-spinner class="processing__spinner" />
          <p class="processing__text">
            Определение стиля мышления...............
            ...................................................
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ProgressBar from "primevue/progressbar";

import "@/assets/scss/processing-page/styles.scss";
import menuOpen from "@/helpers/menuOpener.js";

export default {
  name: "processing-page",
  components: {
    PageHeader,
    HeaderMenu,
    ProgressBar,
    LoadingSpinner,
  },
  data() {
    // Значение прогресс бара на этой странице всегда 100%
    return {
      progressBarValue: 100,
    };
  },
  methods: {
    // Функция отправки на страницу с результатом
    goToResult() {
      this.$router.push("/result");
    },
  },
  mounted() {
    menuOpen();
    // Отправка на страницу с результатом происходит через 5 секунд после открытия, чтобы имитировать обработку данных
    setTimeout(this.goToResult, 5000);
  },
};
</script>

<style scoped>
</style>