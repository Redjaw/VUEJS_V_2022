<template>
  <div class="timer">
    <span>{{ total }}</span>
    <button @click="startTimer">START</button>
    <button @click="stopTimer">STOP</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'timer',
  components: {},
  setup() {
    let startTime = ref()
    let total = ref('0:00')
    let interval;
    const startTimer = () => {
      startTime.value = new Date().getTime()
      interval = setInterval(() => {
        const now = new Date().getTime()
        let currentDifference = now - startTime.value;
        total.value = calculateTimer(currentDifference)
      }, 500)
    }
    const stopTimer = () => {
      window.clearInterval(interval)
    }
    const calculateTimer = (millis) => {
      const minutes = Math.floor(millis / 60000)
      const seconds = ((millis % 60000) / 1000).toFixed(0)
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }
    return {
      stopTimer,
      startTimer,
      total,
      calculateTimer
    }
  }
}
</script>

<style>
.timer {
  width: 200px;
  height: 80px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer span {
  flex: 1;
  margin: .2rem;
}
</style>