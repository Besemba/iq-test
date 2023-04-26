<template>
  <!-- В шаблоне 3 вида списка с вариантами ответов, которые отображаются в зависимости от типа вопроса (строчка, цвет или номер)-->
  <ul v-if="questionData.answerType === 'text'" class="question__list-text">
    <li
      v-for="option of questionData.options"
      :key="option.id"
      class="question__item-text"
    >
      <input
        v-model="currentValue"
        :id="option.id"
        :value="option.value"
        class="question__input question__input-text"
        name="answer"
        type="radio"
      />
      <label
        :for="option.id"
        :style="{ paddingTop: getLabelPadding, paddingBottom: getLabelPadding }"
        class="question__label-text"
      >
        {{ option.text }}</label
      >
    </li>
  </ul>

  <ul v-else-if="questionData.answerType === 'color'" class="question__list-color container">
    <li
      v-for="option of questionData.options"
      :key="option.id"
      class="question__item-color"
    >
      <label class="question__label-color">
        <input
          v-model="currentValue"
          :value="option.value"
          class="question__input question__input-color"
          name="answer"
          type="radio"
        />
        <span
          :style="{ backgroundColor: option.colorCode }"
          class="question__span-color"
        ></span>
      </label>
    </li>
  </ul>

  <ul v-else-if="questionData.answerType === 'number'"  class="question__list-number container">
    <li
      v-for="option of questionData.options"
      :key="option.id"
      class="question__item-number"
    >
      <label class="question__label-number">
        <input
          v-model="currentValue"
          :value="option.value"
          class="question__input question__input-number"
          name="answer"
          type="radio"
        />
        <span class="question__span-number">{{ option.text }}</span>
      </label>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "answers-list",
  // Принимаем входным параметром объект с вопросом
  props: {
    questionData: Object,
  },
  computed: {
    // Получаем доступ к переменной с текущим значением ответа из хранилища
    ...mapState(["currentAnswerValue"]),
    // Создаём гет и сет для значения ответа, чтобы привязать его к v-model
    currentValue: {
      get() {
        return this.currentAnswerValue;
      },
      set(newValue) {
        this.setCurrentAnswer(newValue);
      },
    },
    // Свойство, вычисляющее размер отступов у варианта ответа, в зависимости от количества вариантов
    getLabelPadding() {
      const optionsLength = this.questionData.options.length;
      if (optionsLength <= 5) {
        return "15px";
      } else {
        return "10px";
      }
    },
  },
  methods: {
    ...mapMutations(["setCurrentAnswer"]),
  },
};
</script>

<style scoped>
</style>