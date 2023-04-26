<template>
  <div class="page-content">
    <page-header :is-main-page="true" />
    <header-menu />
    <main>
      <section class="section-hero" id="section-hero">
        <div class="hero container">
          <h3 class="hero__title">Пройдите точный и быстрый</h3>
          <h1 class="hero__main-heading">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</h1>
          <div class="hero__brain-img">
            <img src="@/assets/images/brain.webp" alt="Картинка мозга" />
          </div>
          <!-- Передаём в кнопку данные для переадресации и текст с контентом -->
          <base-button
            :routerData="routerData"
            :text="'ПРОЙТИ ТЕСТ'"
            class="hero__button btn-reset btn-primary"
          />
          <p class="hero__text">
            <span class="hero__yellow-text"
              ><strong
                >И получите рекомендации <br />по развитию своего интеллекта
              </strong> </span
            ><br />
            и улучшению финансового благосостояния и личной жизни
          </p>
          <div class="hero__more-btn more-btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.45453 11.6364L8.45453 6.10454L10.9954 8.64545L11.6364 8L7.99999 4.36363L4.36362 8L5.00453 8.6409L7.54544 6.10454L7.54544 11.6364L8.45453 11.6364Z"
                fill="#0C0B10"
              />
            </svg>
            <a class="more-btn__link" href="#">Подробнее</a>
          </div>
        </div>
      </section>
      <section class="section-first-info" id="section-first-info">
        <div class="first-info">
          <p class="first-info__text">
            Профессиональный IQ&nbsp;-&nbsp;тест позволяет не только определить
            коэффициент вашего интеллекта, <br />
            но и выработать список рекомендаций для повышения этого показателя.
          </p>
        </div>
      </section>

      <section class="section-second-info" id="section-second-info">
        <div class="second-info container">
          <p class="second-info__text">
            Также по результатам теста <strong>ВЫ ПОЛУЧИТЕ</strong> подробные
            <strong>СОВЕТЫ</strong> по определению наиболее перспективной
            <strong>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</strong>
            которая принесет вам скорейший финансовый результат.
          </p>
          <img src="@/assets/images/brain-sides.webp" alt="Картинка полушарий" />
          <base-button
            :routerData="routerData"
            :text="'ПРОЙТИ ТЕСТ'"
            class="second-info__button btn-reset btn-primary"
          />
        </div>
      </section>

      <section class="section-third-info">
        <div class="third-info container">
          <p class="third-info__top-text">
            Прохождение теста займет у вас не более
            <span class="third-info__yellow-text"
              ><strong>12 минут</strong></span
            >, а его результаты вы сможете
            <span class="third-info__yellow-text"
              ><strong>использовать всю жизнь.</strong></span
            >
          </p>
          <div class="third-info__middle-text-container">
            <p class="third-info__middle-text">
              Профессиональная интерпретация и детально
              <strong>проработанные рекомендации</strong> позволят вам
              качественно <strong>изменить все аспекты своей жизни:</strong> от
              финансового до любовного.
            </p>
          </div>
          <div class="third-info__button-container">
            <base-button
              :routerData="routerData"
              :text="'ПРОЙТИ ТЕСТ'"
              class="third-info__button btn-reset btn-secondary"
            />
          </div>
        </div>
      </section>
    </main>
    <page-footer :text="footerText" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import BaseButton from "@/components/BaseButton.vue";
import PageFooter from "@/components/PageFooter.vue";

import "@/assets/scss/main-page/styles.scss";
import menuOpen from "@/helpers/menuOpener.js";

export default {
  components: {
    PageHeader,
    HeaderMenu,
    PageFooter,
    BaseButton,
  },
  data() {
    return {
      // Статичные данные с данными для переадресации и текстом футера
      routerData: {
        name: "question",
        id: 1,
      },
      footerText: "© 2019",
    };
  },
  mounted() {
    // Функция открытия и закрытия меню в хэдере
    menuOpen();
  },
};
</script>

<style scoped>
</style>