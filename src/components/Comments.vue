<template>
	<div class="container" v-if="selectedBook">
		<figure v-for="(commento,index) in selectedBook.comments" :key="index">
			<blockquote class="blockquote">
				<p>{{commento.text}}</p>
			</blockquote>
			<figcaption class="blockquote-footer">
				<cite title="Source Title">{{commento.author}}</cite>
			</figcaption>
		</figure>
	</div>
</template>

<script>
import booksJson from '@/assets/books.json'
export default ({
	name: "comments",
	props: ["isin"],
	data() {
		return {
			books: booksJson.books,
			selectedBook: {}
		}
	},
	mounted() {
		this.selectedBook = this.books.filter((item) => item.isin === this.isin)[0]
	}
});
</script>