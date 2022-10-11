<template>
	Lista degli investitori
  <input type="text" v-model="filter" @change="changeFilter()"/>
  {{investors}}
</template>

<script>
import axios from 'axios'
export default ({
  name: "investors",
  data() {
    return {
      investors: [],
      filter: ''
    }
  },
  mounted() {
    this.filterInvestors()
  },
  methods: {
    filterInvestors(name) {
      if (typeof name != 'undefined') {
        axios.get('/api/investors?name='+name)
          .then((result) => this.investors = result)
      } else {
        axios.get('/api/investors')
          .then((result) => this.investors = result)
      }
    },
    changeFilter() {
      this.filterInvestors(this.filter)
    }
  }
});
</script>