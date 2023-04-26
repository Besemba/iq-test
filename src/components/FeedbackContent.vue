<template>
  <div class="feedback container">
    <h3 class="feedback__title">Результаты:</h3>
    <ul class="feedback__list list-reset container">
      <li class="feedback__item">
        <p class="feedback__text">
          Имя:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.name }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Год рождения:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.birth_year }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Пол:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.gender }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Рост:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.height }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Вес:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.mass }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Цвет волос:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.hair_color }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Цвет глаз:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.eye_color }}
        </p>
      </li>
      <li class="feedback__item">
        <p class="feedback__text">
          Цвет кожи:
        </p>
        <p class="feedback__text feedback__text-value">
          {{ feedbackData.skin_color }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    feedbackData: Object,
  },
};
</script>