<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Stocks />
      </div>
      <div class="col">
        <Investors />
      </div>
      <div class="col">
        <AddStocks />
      </div>
    </div>
  </div>
</template>

<script>
import Stocks from '@/components/Stocks.vue'
import Investors from '@/components/Investors.vue'
import AddStocks from '@/components/AddStocks.vue'
export default {
  name: 'App',
  components: {
    Stocks,
    Investors,
    AddStocks
  }
}
</script>

<style>
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>