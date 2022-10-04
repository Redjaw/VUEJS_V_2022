<template>
  <div class="timer">
    <span>{{ formattedTimer }}</span>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'timer',
  components: {},
  setup(props) {
    let formattedTimer = ref('00 : 00')
    const calculateTimer = (seconds) => {
        let minutes = Math.floor(seconds / 60)
        let minSecs = seconds - minutes * 60
        return `${minutes} : ${minSecs}`
    }
    return {
        formattedTimer
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
.timer span{
    flex: 1;
    margin: .2rem;
}
</style>