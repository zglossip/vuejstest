<template>
  <div class="row">
    <evolution v-bind:chain="chain"></evolution>
  </div>
</template>

<script>
import axios from 'axios'
import Evolution from "./Evolution.vue";
export default {
  components: [Evolution],
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      chain: null
    }
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/evolution-chain/' + this.pokemonId)
      .then(response => {
        this.chain = response.data.chain
      })
  }
}
</script>