<template>
  <div class="text-center">
    <b-badge
      v-if="showArrow"
      variant="info"
    >
      <font-awesome-icon icon="arrow-circle-down" />
    </b-badge>
    <b-img
      :id="name + 'image'"
      :src="spriteUrl"
      center
      :class="$store.state.pokemon.name === name ? 'border border-info rounded-circle' : 'rounded-circle'"
      class="sprite"
      @click="goToPokemon"
    />
    <figcaption class="figure-caption">
      {{ name.toUpperCase() }}
    </figcaption>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import { POKEMON_URL } from '../util/PokeAPIConstants'

library.add(faArrowCircleDown)

export default {
  components: { FontAwesomeIcon },
  props: {
    spriteUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    goToPokemon () {
      axios.get(POKEMON_URL + this.name)
        .then(response => {
          this.$store.dispatch('updatePokemon', response.data)
        })
    }
  }
}
</script>
