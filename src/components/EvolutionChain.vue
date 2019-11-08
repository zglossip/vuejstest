<template>
  <div class="card">
    <div class="card-body">
      <evolution v-bind:chain="this.$store.state.pokemonEvolutionChain"></evolution>
    </div>
  </div>
</template>

<script>
import Evolution from "./Evolution.vue";
export default {
  components: {Evolution}
}
</script>