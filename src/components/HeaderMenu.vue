<template>
  <div class="menu" id="header-menu">
    <button
      class="menu__close-btn btn-reset"
      id="menu-close-icon"
      aria-label="Закрыть меню"
    ></button>
    <nav class="menu__nav menu-nav">
      <ul class="menu-nav__list list-reset">
        <li class="menu-nav__item">
          <a class="menu-nav__link" href="/">ГЛАВНАЯ</a>
        </li>
        <li class="menu-nav__item">
          <a class="menu-nav__link" href="/#section-first-info"
            >ИНФОРМАЦИЯ О ТЕСТЕ</a
          >
        </li>
        <li class="menu-nav__item">
          <router-link
            class="menu-nav__link"
            :to="{ name: 'question', params: { id: 1 } }"
            >ПРОЙТИ ТЕСТ</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>