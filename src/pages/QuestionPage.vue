<template>
  <div class="question-page">
    <page-header :is-main-page="false" :text="'ТЕСТ ПО ОПРЕДЕЛЕНИЮ IQ'" />
    <header-menu />
    <section class="section-question">
      <div class="question">
        <ProgressBar
          :value="progressBarValue"
          :showValue="false"
          class="container"
        />
        <question-content :questionData="questions[questionNumber]" />
        <base-button
          @click.native="resetCurrentAnswer"
          :disabled="!isPickedOption"
          :routerData="nextPageData"
          :text="'ДАЛЕЕ'"
          class="question__button container"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import BaseButton from "@/components/BaseButton.vue";
import ProgressBar from "primevue/progressbar";
import QuestionContent from "@/components/QuestionContent.vue";
import { mapState, mapMutations } from "vuex";

import "@/assets/scss/question-page/styles.scss";
import menuOpen from "@/helpers/menuOpener.js";

export default {
  name: "question-page",
  components: {
    PageHeader,
    HeaderMenu,
    BaseButton,
    ProgressBar,
    QuestionContent,
  },
  computed: {
    // Получаем доступ к массиву вопросов и к значению текущего ответа из хранилища
    ...mapState(["questions", "currentAnswerValue"]),
    // Вычисление данных роутера следующей страницы.
    // Если следующий номер больше количества вопросов, то переадресация идет на странцицу обработки данных
    nextPageData() {
      const nextPageNumber = Number(this.$route.params.id) + 1;
      const questionsLength = this.questions.length;
      const routerData = {
        name: null,
        id: null,
      };
      if (nextPageNumber <= questionsLength) {
        routerData.name = "question";
        routerData.id = nextPageNumber;
        return routerData;
      } else {
        routerData.name = "processing";
        routerData.id = null;
        return routerData;
      }
    },
    // Вы числения индекса вопроса в массиве (если мы на вопросе №1, то его индекс = 0)
    questionNumber() {
      return this.$route.params.id - 1;
    },
    // Вычисление значения для прогресс бара в %
    progressBarValue() {
      return Math.round((100 / this.questions.length) * this.$route.params.id);
    },
    // Смотрим в хранилище и возвращаем булеан значение в зависимости от того, выбран ли ответ или ещё нет
    isPickedOption() {
      if (this.currentAnswerValue != null) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // Сбрасываем текущий выбранный вариант (используем при клике на кнопку "Далее")
    ...mapMutations(["resetCurrentAnswer"]),
  },
  mounted() {
    menuOpen();
  },
};
</script>

<style>
/* стилизация прогресс бара */
.p-progressbar {
  max-width: 260px;
  height: 11px;
  background: rgba(242, 243, 243, 0.56);
  border-radius: 10px;
}
.p-progressbar-determinate .p-progressbar-value {
  border-radius: 10px;
  background: #3bde7c;
}
</style>