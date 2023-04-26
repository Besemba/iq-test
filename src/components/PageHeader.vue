<template>
  <header class="header">
    <div class="header-content container">
      <button
        class="header__burger btn-reset"
        id="burger-menu-icon"
        aria-label="Меню"
      ></button>
      <!-- Если страница не главная, то добавляем в хэдер блок с картинкой и надписью -->
      <div v-if="!isMainPage" class="header-middle-content">
        <div class="header__logo">
          <img src="@/assets/images/brain.webp" alt="Лого iq" />
        </div>
        <p :class="textClass" class="header__text">{{ text }}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "page-header",
  props: {
    isMainPage: Boolean,
    text: String,
    textClass: String,
  }
};
</script>