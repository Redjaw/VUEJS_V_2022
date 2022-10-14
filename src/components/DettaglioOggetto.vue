<template>
	<div>{{selectedItem}}</div> 
  <div @click="logToConsole('che schifo i mixin')">{{testString}}</div>
  <button v-if="oggettoNellaLista()" @click="rimuoviDallaLista()">rimuovi</button>
  <button v-else @click="aggiungiOggetto(selectedItem)">aggiungi</button>
  
</template>

<script>
//import { mapState } from 'vuex';
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../pinia.store'
import test from '../mixins/Test'

export default ({
  name: "dettaglio-oggetto",
  props: ['selectedItem'],
  mixins: [test],
  methods: {
    ...mapActions(useCounterStore, ['aggiungiOggetto']),
    rimuoviDallaLista() {
      this.$store.dispatch('rimuoviOggetto', this.selectedItem)
    },
    oggettoNellaLista() {
      return this.carrello.filter((item) => item.id === this.selectedItem.id)[0]
    }
  },
  computed: {
    ...mapState(useCounterStore,['carrello'])
  }
});
</script>