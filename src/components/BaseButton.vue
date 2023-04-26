<template>
  <button @click="goToRoute" class="btn-reset btn-primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    text: String,
    routerData: Object,
  },
  methods: {
    // Меняем страницу в зависимости от переданных параметров
    goToRoute() {
      this.$router.push({
        name: this.routerData.name,
        params:  {
          id: this.routerData.id,
        }
      });
    }
  }
};
</script>

<style scoped>
</style>