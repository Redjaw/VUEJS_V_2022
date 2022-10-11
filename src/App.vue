<template>
  <div class="p-grid p-m-0">
    <div class="p-col-4" style="position: relative">
      <Button icon="pi pi-plus" class="p-button-rounded p-button-secondary" @click="newCorsa"
        style="position: absolute; right: 10px;z-index: 1000" />
      <List @cambioCorsa="cambiaCorsaSelezionata" />
    </div>
    <div class="p-col">
      <Running :corsa="corsaSelezionata" />
    </div>
  </div>


</template>

<script>
import Button from 'primevue/button'
import Running from '@/components/Running.vue'
import List from '@/components/List.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    Button,
    List,
    Running
  },
  setup() {
    let corsaSelezionata = ref()
    const cambiaCorsaSelezionata = function (corsa) {
      corsaSelezionata.value = corsa
    }
    const newCorsa = function () {
      corsaSelezionata.value = {}
    }
    return { corsaSelezionata, newCorsa, cambiaCorsaSelezionata }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}
</style>