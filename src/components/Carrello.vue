<template>
	<div><span style="margin-right: 50px;">Totale oggetti nel carrello - {{totaleOggetti}}</span><span>Prezzo - {{costoTotale}} €</span></div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../pinia.store'
//import { mapState, mapGetters} from 'vuex'
export default ({
  name: "Carrello",
  computed: {
    ...mapState(useCounterStore, ['totaleOggetti','costoTotale'])
  }
});
</script>