<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <Menu @pizzaSelected="selectPizza" :currentPizza="selectedPizza"/>
      </div>
      <div class="col">
        <Dettaglio :currentPizza="selectedPizza" v-if="selectedPizza"/>
        <div class="alert alert-primary" role="alert" v-else>
          Nessuna pizza selezionata
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'App',
  data() {
    return {
      selectedPizza: ''  
     }
  },
  components: {
    Menu
  },
  methods: {
    selectPizza(pizza) {
      this.selectedPizza = pizza
    }
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
  padding-top: 20px;
  height: 100%;
}
</style>