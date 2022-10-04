<template>
	<div class="container">Libreria</div>
</template>

<script>
import booksJson from '@/assets/books.json'

export default ({
  name: "library",
  data(){
	return {
		books: booksJson.books
	}
  }
});
</script>