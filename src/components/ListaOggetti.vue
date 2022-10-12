<template>
	<ul>
		<li v-for="oggetto in listaOggetti" :key="oggetto.id" @click="selezionaOggetto(oggetto)">{{oggetto.name}} -- {{oggetto.price}} €</li>
	</ul>
</template>

<script>
import listaOggetti from '@/assets/items.json'

export default ({
	name: "lista-oggetti",
	emits: ['itemSelected'],
	data() {
		return {
			listaOggetti: listaOggetti.items
		}
	},
	methods: {
		selezionaOggetto(oggetto) {
			this.$emit('itemSelected',oggetto)
		}
	}
});
</script>