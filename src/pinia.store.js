import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
         carrello: [],
        costoTotale: 0
    }),
    getters: {
        totaleOggetti(state) {
            return state.carrello.length
        },
    },
    actions: {
    aggiungiOggetto(item) {
        this.carrello.push(item)
        this.costoTotale += item.price
    }
  },
})