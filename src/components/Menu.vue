<template>
	<div class="container">
		<div class="list-group">
			<a v-for="pizza in pizze" 
				:key="pizza.label" 
				@click="selectPizza(pizza)" 
				class="list-group-item list-group-item-action" 
				:class="{'active':currentPizza.label === pizza.label}">{{pizza.name}}</a>
		</div>
	</div>
</template>

<script>
import pizze from '../assets/pizze.json'
export default ({
	name: "menu",
	emits: ['pizzaSelected'],
	props: ['currentPizza'],
	data() {
		return {
			pizze: []
		}
	},
	mounted() {
		this.pizze = pizze.pizze
	},
	methods: {
		selectPizza(pizza) {
			this.$emit('pizzaSelected',pizza)
		}
	}
});
</script>