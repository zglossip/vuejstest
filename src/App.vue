<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-4">
        <b-form-select class="mb-1" v-on:change="updatePokemonId($event)">
          <option v-for="pokemon in pokemonList" :value="pokemon">{{pokemon.name}}</option>
        </b-form-select>
        <div class="row">
          <b-nav>
            <b-nav-item active to="pokemon">Pokemon</b-nav-item>
            <b-nav-item to="evolution">Evolution</b-nav-item>
          </b-nav>
        </div>
        <router-view></router-view>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {ALL_POKEMON_URL} from "./util/PokeAPIConstants";
export default {
  methods: {
    updatePokemonId: function(pokemon){
      this.$store.dispatch('updatePokemon', pokemon)
      this.$router.push('/pokemon')
    }
  },
  data() {
    return{
      selected: null,
      pokemonList: []
    }
  },
  mounted() {
    axios
      .get(ALL_POKEMON_URL)
      .then(response => this.pokemonList = response.data.results)
  }
}
</script>
