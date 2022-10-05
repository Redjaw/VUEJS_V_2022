import { createStore } from 'vuex'

const store = createStore({
	state() {
        return {
            test: 'ciao'
		}
    },
    getters: {},
	actions: {},
    mutations: {}
})

export default store