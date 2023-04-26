<template>
  <p class="result__timer" id="timer">
    {{ prettyTime | prettify }}<span class="result__timer-text">минут</span>
  </p>
</template>

<script>
export default {
  name: "my-timer",
  data() {
    return {
      isRunning: false,
      time: 600,
      timer: null,
    };
  },
  filters: {
    prettify: function (value) {
      let data = value.split(":");
      let minutes = data[0];
      let secondes = data[1];
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (secondes < 10) {
        secondes = "0" + secondes;
      }
      return minutes + ":" + secondes;
    },
  },
  computed: {
    prettyTime() {
      let time = this.time / 60;
      let minutes = parseInt(time);
      let secondes = Math.round((time - minutes) * 60);
      return minutes + ":" + secondes;
    },
  },
  methods: {
    start() {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            clearInterval(this.timer);
            this.isRunning = false;
            this.changeTimerIsRunning();
          }
        }, 1000);
      }
    },
    changeTimerIsRunning() {
      this.$emit('updateTimerIsRunning', this.isRunning);
    },
  },
  mounted() {
    this.start();
    this.changeTimerIsRunning()
  },
};
</script>

<style scoped>
</style>