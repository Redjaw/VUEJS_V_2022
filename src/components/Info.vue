<template>
	<div class="row h-100 d-flex align-items-center" v-if="album">
        <div class="col-1 text-center">
            <i class="fas fa-backward fa-3x"></i>
        </div>
      <div class="col text-center">
        <h2>{{album.name}}</h2>
        <h3><a href="https://it.wikipedia.org/wiki/Queen" target="_blank">Queen</a></h3>
        <h4>1975</h4>
        <h5>00:00 / 43:08</h5>
      </div>
      <div class="col-1 text-center">
        <i class="fas fa-forward fa-3x"></i>
    </div>
    </div>
    <div v-show="album">seleziona un album per vedere il dettaglio</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IAlbum } from '../components/Album'
export default defineComponent({
  name: "info",
  props: {
    album: {
      type: Object as PropType<IAlbum>
    }
  }
});
</script>

<style lang="scss" scoped>
    .row {
        color: white;
        a {
            color: white;
        }
    }
</style>