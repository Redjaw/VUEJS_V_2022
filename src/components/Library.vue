<template>
	<div class="container">
		<h1>Libreria</h1>
		<div class="list-group">
			<a href="#" class="list-group-item list-group-item-action" v-for="libro in books" :key="libro.isin" @click="naviga(libro)">
				{{libro.name}} - {{libro.author}}
			</a>
		</div>
	</div>
</template>

<script>
import booksJson from '@/assets/books.json'

export default ({
	name: "library",
	data(){
		return {
			books: booksJson.books
		}
	},
	methods: {
		naviga(libro) {
			this.$router.push({ "name": "libro", "params": {"isin":libro.isin} })
		}
	}
});
</script>