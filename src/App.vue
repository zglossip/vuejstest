<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-6">
        <ul>
          <li v-for="pokemon in pokemonList">
            <basic v-bind:pokemon-id="pokemon.id"></basic>
          </li>
        </ul>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Basic from "./components/Basic.vue";
export default {
  components: {
    Basic
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
