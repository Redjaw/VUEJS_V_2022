<template>
  <div class="row h-100 d-flex align-items-center">
    <div class="col-1 text-center"
      :style="{visibility: store.selectedAlbum && store.selectedIndex > 0 ? 'visible' : 'hidden'}"
      @click="previousCover()">
      <i class="fas fa-backward fa-3x" style="cursor: pointer;"></i>
    </div>
    <div class="col text-center" v-if="store.selectedAlbum">
      <h2><a :href="store.selectedAlbum.link" target="_blank">{{store.selectedAlbum.name}}</a></h2>
      <h3><a :href="store.selectedAlbum.author.link" target="_blank">{{store.selectedAlbum.author.name}}</a></h3>
      <h4>{{store.selectedAlbum.year}}</h4>
      <h5>00:00 / {{TimeHelper.millisToMinutesAndSeconds(store.selectedAlbum.duration)}}</h5>
    </div>
    <div class="col-1 text-center"
      :style="{visibility: store.selectedAlbum && store.selectedIndex < albums.length - 1 ? 'visible' : 'hidden'}"
      @click="nextCover()">
      <i class="fas fa-forward fa-3x" style="cursor: pointer;"></i>
    </div>
    <div class="col text-center" v-if="!store.selectedAlbum">
      <h3>Seleziona un album per vedere i dettagli</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/Pinia';
import albumJson from '@/assets/album.json'
import { Album } from './Album';
import { ref } from 'vue';
import TimeHelper from '@/helpers/timeHelper'

const albums = ref<Array<Album>>(albumJson.album)

const store = useStore()

function previousCover() {
  store.selectedAlbum = albums.value[store.selectedIndex - 1]
  store.selectedIndex--
}

function nextCover() {
  store.selectedAlbum = albums.value[store.selectedIndex + 1]
  store.selectedIndex++
}

</script>

<style lang="scss" scoped>
.row {
  color: white;

  a {
    color: white;
  }
}
</style>