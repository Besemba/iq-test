<template>
  <div class="result-page">
    <page-header
      :is-main-page="false"
      :text="'ГОТОВО!'"
      :textClass="'header__text-result'"
    />
    <header-menu />
    <section class="section-result">
      <div class="result container">
        <h2 class="result__title">ВАШ РЕЗУЛЬТАТ РАССЧИТАН:</h2>
        <p class="result__text-top">
          <span class="result__text-top-span">Вы относитесь к 3% </span>
          респондентов, чей уровень интеллекта более чем на 15 пунктов
          отличается от среднего в большую или меньшую сторону!
        </p>
        <h1 class="result__heading">СКОРЕЕ ПОЛУЧИТЕ СВОЙ РЕЗУЛЬТАТ!</h1>
        <div class="result__text-middle-container">
          <p class="result__text-middle">
            В целях защиты персональных данных результат теста, их подробная
            интерпретация и рекомендации доступны в виде голосового сообщения по
            звонку с вашего мобильного телефона
          </p>
        </div>
        <p class="result__text-bottom">Звоните скорее, запись доступна всего</p>
        <!-- показываем таймер, если ещё не загружены данные с сервера,
        а также подписываемся на событие, запущенное в таймере для отлова значения IsRunning (запущен таймер или нет) -->
        <my-timer
          v-if="!feedbackData"
          @updateTimerIsRunning="changeTimerIsRunning"
        />
        <!-- показываем кнопку, если все условия соблюдены и вызываем по клику функцию запроса на сервер -->
        <button
          v-if="conditionsForButton"
          @click="getCall"
          :disabled="disableCallButton"
          class="result__call-button btn-reset"
        >
          <p class="result__call-text">Позвонить и прослушать результат</p>
        </button>
        <!-- показываем спиннер загрузки, если идёт загрузка данных с сервера -->
        <loading-spinner v-if="isLoadingFeedbackData" />
        <!-- показываем полученные данные с сервера, если они загружены -->
        <feedback-content v-if="feedbackData" :feedback-data="feedbackData" />
        <!-- показываем сообщение об ошибке, если данные загрузить не удалось -->
        <div v-if="isLoadingFeedbackFalse" class="result__error">
          <p class="result__error-text">Произошла ошибка...</p>
        </div>
      </div>
    </section>
    <page-footer :text="footerText" class="result-page__footer" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import PageFooter from "@/components/PageFooter.vue";
import FeedbackContent from "@/components/FeedbackContent.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import MyTimer from "@/components/MyTimer.vue";
import { mapState, mapActions } from "vuex";

import "@/assets/scss/result-page/styles.scss";
import menuOpen from "@/helpers/menuOpener.js";

export default {
  name: "result-processing",
  components: {
    PageHeader,
    HeaderMenu,
    PageFooter,
    FeedbackContent,
    LoadingSpinner,
    MyTimer,
  },
  data() {
    return {
      footerText:
        "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI",
      // Значение, указывающее, запущен таймер или нет
      timerIsRunning: null,
    };
  },
  computed: {
    ...mapState([
      "feedbackData",
      "isLoadingFeedbackData",
      "isLoadingFeedbackFalse",
    ]),
    // Условия, при которых мы показываем или скрываем кнопку звонка
    conditionsForButton() {
      if (this.isLoadingFeedbackData || this.feedbackData) {
        return false;
      } else {
        return true;
      }
    },
    // Если таймер закончился, то возвращаем булеан значение для деактивации кнопки звонка
    disableCallButton() {
      return !this.timerIsRunning;
    },
  },
  methods: {
    // метод из хранилища для запроса данных с сервера
    ...mapActions(["getCall"]),
    // Меняем значение запущенного таймера на значение, полученное из дочернего элемента (самого таймера)
    changeTimerIsRunning(value) {
      this.timerIsRunning = value;
    },
  },
  mounted() {
    menuOpen();
  },
};
</script>