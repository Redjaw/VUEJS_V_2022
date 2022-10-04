<template>
    <form>
        <div class="mb-3">
            <label for="acme" class="form-label">ACME Inc</label>
            <input type="number" name="acme" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="global" class="form-label">Global Inc</label>
            <input type="number" name="global" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary" @click="aggiungiStock">Aggiungi Stock</button>
    </form>
</template>

<script>
export default ({
  name: "add-stocks",
});
</script>