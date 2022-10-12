<template>
  <div class="container d-flex flex-column">
    <div class="row flex-fill">
      <div class="col-3">
        <ListaOggetti @itemSelected="itemSelected"></ListaOggetti>
      </div>
      <div class="col-9">
        <DettaglioOggetto :selectedItem="selectedItem"></DettaglioOggetto>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Carrello></Carrello>
      </div>
    </div>
  </div>
  
</template>

<script>
import ListaOggetti from '@/components/ListaOggetti.vue'
import DettaglioOggetto from '@/components/DettaglioOggetto.vue'
import Carrello from '@/components/Carrello.vue'
export default {
  name: 'App',
  components: {
    ListaOggetti,
    DettaglioOggetto,
    Carrello
  },
  data() {
    return {
      selectedItem: {}
    }
  },
  methods: {
    itemSelected(oggetto) {
      this.selectedItem = oggetto
    }
  }
}
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  .container {
    height: 100%;
  }
}
</style>