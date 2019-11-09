<template>
  <div>
    <router-tabs active="EVOLUTION" />
    <div class="">
      <div
        class="card"
        style="width: 100%;"
      >
        <h5 class="card-title">
          Evolution Chart
        </h5>
        <div class="card-body">
          <evolution :chain="this.$store.state.pokemonEvolutionChain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Evolution from './Evolution.vue'
import RouterTabs from './RouterTabs.vue'
export default {
  components: { Evolution, RouterTabs }
}
</script>
