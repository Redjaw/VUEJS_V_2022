import { createStore } from 'vuex'

const store = createStore({
	state() {
        return {
            carrello: [],
            costoTotale: 0
		}
    },
    getters: {
        totaleOggetti(state) {
            return state.carrello.length
        }
    },
    actions: {
        aggiungiOggetto(context,item) {
            context.commit('aggiungiAlCarrello', item)
            context.commit('aggiornaPrezzo',item.price)
        },
        rimuoviOggetto(context,item) {
            context.commit('rimuoviDalCarrello', item)
            context.commit('aggiornaPrezzo',-item.price)
        }
    },
    mutations: {
        aggiungiAlCarrello(state,item) {
            state.carrello.push(item)
        },
        rimuoviDalCarrello(state,item) {
            state.carrello.splice(state.carrello.indexOf(item),1)
        },
        aggiornaPrezzo(state,price) {
            state.costoTotale += price
        }
    }
})

export default store