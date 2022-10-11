<template>
  <span>
    <Card style="width: 25em" v-if="corsaSelezionata && corsaSelezionata.total">
      <template #header>
        <img v-if="corsaSelezionata && corsaSelezionata.map" :src="returnMap(corsaSelezionata.map)"
          style="height: 15rem" />
      </template>
      <template #title v-if="corsaSelezionata && corsaSelezionata.date">
        {{corsaSelezionata.date}}
      </template>
      <template #content v-if="corsaSelezionata && corsaSelezionata.total">
        {{corsaSelezionata.total}}
      </template>
    </Card>
    <Timer v-if="corsaSelezionata && !corsaSelezionata.total"></Timer>
  </span>
</template>

<script>
import { computed } from 'vue'
import Card from 'primevue/card'
import Timer from './Timer.vue'
export default {
  name: 'running',
  components: { Card, Timer },
  props: ['corsa'],
  setup(props) {
    let corsaSelezionata = computed(() => props.corsa)
    const returnMap = (map) => 'src/assets/maps/' + map
    return { corsaSelezionata, returnMap }
  }
}
</script>