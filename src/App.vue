<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <b-input
          v-model="filter"
          placeholder="Filter by name..."
        />
        <b-table
          id="pokemon-table"
          striped
          hover
          :items="pokemonList"
          :fields="fields"
          :per-page="10"
          :current-page="currentPage"
          :filter="filter"
          @row-clicked="updatePokemonId($event)"
        />
        <b-pagination
          v-model="currentPage"
          :total-rows="807"
          :per-page="10"
          aria-controls="pokemon-table"
        />
      </div>
      <div class="col-4">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ALL_POKEMON_URL } from './util/PokeAPIConstants'
export default {
  data () {
    return {
      pokemonList: [],
      fields: ['name'],
      currentPage: 1,
      filter: ''
    }
  },
  mounted () {
    axios
      .get(ALL_POKEMON_URL)
      .then(response => {
        this.pokemonList = response.data.results.map(pokemon => {
          return {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            url: pokemon.url
          }
        })
      })
  },
  methods: {
    updatePokemonId: function (pokemon) {
      this.$store.dispatch('updatePokemon', pokemon)
      this.$router.push('/pokemon')
    }
  }
}
</script>
