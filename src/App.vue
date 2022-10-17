<template>
  <div class="container d-flex flex-column">
    <div class="row flex-fill">
      <div class="col">
        <AlbumList />
      </div>
    </div>
    <div class="row flex-fill">
      <div class="col">
        <Info />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AlbumList from '@/components/AlbumList.vue'
import Info from '@/components/Info.vue'

</script>

<style lang="scss">
html,
body {
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