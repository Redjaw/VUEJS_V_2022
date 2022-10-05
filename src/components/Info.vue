<template>
	<div class="row h-100 d-flex align-items-center">
        <div class="col-1 text-center">
            <i class="fas fa-backward fa-3x"></i>
        </div>
      <div class="col text-center">
        <h2>A Night at the Opera</h2>
        <h3><a href="https://it.wikipedia.org/wiki/Queen" target="_blank">Queen</a></h3>
        <h4>1975</h4>
        <h5>00:00 / 43:08</h5>
      </div>
      <div class="col-1 text-center">
        <i class="fas fa-forward fa-3x"></i>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "info"
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