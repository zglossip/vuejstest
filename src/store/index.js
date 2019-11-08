import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonId: null,
    pokemonDescription: ""
  },
  mutations: {
    updatePokemonId (state, pokemonId) {
      state.pokemonId = pokemonId
    },
    updatePokemonDescription (state, pokemonDescription) {
      state.pokemonDescription = pokemonDescription
    }
  },
  actions: {
    updatePokemon({ commit }, pokemonId) {
      commit('updatePokemonId', pokemonId)
      axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId)
        .then(response => {
          let description = ''
          response.data.flavor_text_entries.forEach(flavorTextEntry => {
            if(flavorTextEntry.language.name == 'en' && description === ''){
              description = flavorTextEntry.flavor_text
            }
          })
          commit('updatePokemonDescription', description)
        })
    }
  }
})