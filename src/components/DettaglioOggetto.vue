<template>
	<div>{{selectedItem}}</div>
  <button v-if="oggettoNellaLista()" @click="rimuoviDallaLista()">rimuovi</button>
  <button v-else @click="aggiungiAllaLista()">aggiungi</button>
  
</template>

<script>
import { mapState } from 'vuex';

export default ({
  name: "dettaglio-oggetto",
  props: ['selectedItem'],
  methods: {
    aggiungiAllaLista() {
      this.$store.dispatch('aggiungiOggetto',this.selectedItem)
    },
    rimuoviDallaLista() {
      this.$store.dispatch('rimuoviOggetto', this.selectedItem)
    },
    oggettoNellaLista() {
      return this.carrello.filter((item) => item.id === this.selectedItem.id)[0]
    }
  },
  computed: {
    ...mapState(['carrello'])
  }
});
</script>