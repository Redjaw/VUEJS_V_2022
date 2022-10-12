<template>
  <div class="container d-flex flex-column">
    <div class="row flex-fill">
      <div class="col">
        <AlbumList @albumSelected="albumSelected"/>
      </div>
    </div>
    <div class="row flex-fill">
      <div class="col">
        <Info :album="selectedAlbum"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AlbumList from '@/components/AlbumList.vue'
import Info from '@/components/Info.vue'
import { IAlbum } from './components/Album'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    AlbumList,
    Info
  },
  data() {
    return {
      selectedAlbum: undefined as IAlbum | undefined
    }
  },
  methods: {
    albumSelected(album : IAlbum) : void {
      this.selectedAlbum = album
    }
  }
})
</script>

<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background-color: #181818;
  .container {
    height: 100%;
  }
}
</style>