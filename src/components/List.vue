<template>
  <Listbox v-model="corsaSelezionata" :options="corse" @change="selectCorse" filterPlaceholder="Search">
    <template #option="slotProps">
      <div>{{slotProps.option.date}}</div>
    </template>
  </Listbox>
</template>

<script>
import Listbox from 'primevue/listbox'
import runningLog from '@/assets/runningLogs.json'
import { ref } from 'vue'
export default {
  name: 'List',
  components: { Listbox },
  emits: ['cambioCorsa'],
  setup(props, context) {
    let corse = ref(runningLog.corse)
    let corsaSelezionata = ref({})
    const selectCorse = function () {
      context.emit('cambioCorsa', corsaSelezionata.value)
    }
    return { corse, corsaSelezionata, selectCorse }
  }
}
</script>