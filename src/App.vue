<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <router-view></router-view>
        <b-form-select v-on:change="updatePokemonId($event)">
          <option v-for="pokemon in pokemonList" :value="pokemon.id">{{pokemon.name.english}}</option>
        </b-form-select>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    updatePokemonId: function(pokemonId){
      this.$store.dispatch('updatePokemon', pokemonId)
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
      .get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then(response => this.pokemonList = response.data)
  }
}
</script>
