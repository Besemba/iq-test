<template>
  <footer class="footer">
    <div class="footer__content container">
      <p class="footer__text">
        {{  text }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'base-footer',
  props: {
    text: String,
  }
}
</script>

<style scoped>

</style>