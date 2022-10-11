<template>
        <div class="mb-3">
            <label for="acme" class="form-label">ACME Inc</label>
            <input type="number" v-model="acme" name="acme" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="global" class="form-label">Global Inc</label>
            <input type="number" v-model="global" name="global" class="form-control"/>
        </div>
        <button class="btn btn-primary" @click="aggiungiStock">Aggiungi Stock</button>
</template>

<script>
import axios from 'axios'
export default ({
    name: "add-stocks",
    data() {
        return {
            acme: '',
            global: ''        
      }
    },
    methods: {
        aggiungiStock() {
            this.$axios.post('/api/stocks', {
                    acme: this.acme,
                    global: this.global
                }
            ).then((result)=>console.log('ok')).catch((error)=>alert(error.message))
        }
  }
});
</script>