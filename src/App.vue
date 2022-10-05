<template>
  <div class="container d-flex flex-column">
    <div class="row flex-fill">
      <div class="col-3">
        <ListaOggetti ></ListaOggetti>
      </div>
      <div class="col-9">
        <DettaglioOggetto></DettaglioOggetto>
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
import ListaOggetti from '@/components/ListaOggetti'
import DettaglioOggetto from '@/components/DettaglioOggetto'
import Carrello from '@/components/Carrello'
export default {
  name: 'App',
  components: {
    ListaOggetti,
    DettaglioOggetto,
    Carrello
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