<template>
	<div><span style="margin-right: 50px;">Totale oggetti nel carrello - {{totaleOggetti}}</span><span>Prezzo - {{costoTotale}} €</span></div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default ({
  name: "Carrello",
  computed: {
    ...mapState(['costoTotale']),
    ...mapGetters(['totaleOggetti'])
  }
});
</script>