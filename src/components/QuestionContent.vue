<template>
  <div
    class="question__content"
    :class="{ question__content_center: questionData.questionType != 'image' }"
  >
    <h2 :style="{ fontSize: titleSize, marginBottom: titleMarginBottom }" class="question__title">
      {{ questionData.title }}
    </h2>
    <!-- добавляем картинку, если тип вопроса соответствующий -->
    <div v-if="questionData.questionType === 'image'" class="question__image">
      <img
        :src="'/img/' + questionData.imageName"
        alt="Изображение с заданием"
      />
    </div>
    <answers-list :questionData="questionData" class="list-reset" />
  </div>
</template>

<script>
import AnswersList from "@/components/AnswersList.vue";

export default {
  name: "question-content",
  // Принимаем объект с вопросом для дальнейшей передачи в компонент со списком ответов
  props: {
    questionData: Object,
  },
  components: {
    AnswersList,
  },
  computed: {
    // Меняем у заголовка размер и отступ в зависимости от типа вопроса (если вопрос с картинкой, то текст меньше и отступа нет)
    titleSize() {
      if (this.questionData.questionType === 'image') {
        return "16px";
      } else {
        return "20px";
      }
    },
    titleMarginBottom() {
      if (this.questionData.questionType === 'image') {
        return "0";
      } else {
        return "15px";
      }
    },
  },
};
</script>