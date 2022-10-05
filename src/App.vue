<template>
  <div class="container text-center">
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>