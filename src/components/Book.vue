<template>
	<div class="container" v-if="selectedBook">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">{{selectedBook.name}}</h5>
				<p class="card-text">{{selectedBook.plot}}</p>
				<router-link class="btn btn-primary" :to="{'name':'libreria'}">Torna all'elenco</router-link>
			</div>
		</div>
	</div>
	<router-view />
</template>

<script>
import booksJson from '@/assets/books.json'
export default ({
	name: "book",
	props: ["isin"],
	data() {
		return {
			books: booksJson.books,
			selectedBook: {}
		}
	},
	mounted() {
		this.selectedBook = this.books.filter((item)=>item.isin === this.isin)[0]
	}
});
</script>