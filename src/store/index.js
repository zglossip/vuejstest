import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: null,
    pokemonDescription: '',
    pokemonEvolutionChain: null,
    pokemonImageUrl: ''
  },
  mutations: {
    updatePokemon (state, pokemon) {
      state.pokemon = pokemon
    },
    updatePokemonDescription (state, pokemonDescription) {
      state.pokemonDescription = pokemonDescription
    },
    updatePokemonEvolutionChain (state, pokemonEvolutionChain) {
      state.pokemonEvolutionChain = pokemonEvolutionChain
    },
    updatePokemonImageUrl (state, pokemonImageUrl) {
      state.pokemonImageUrl = pokemonImageUrl
    }
  },
  actions: {
    updatePokemon ({ commit }, payload) {
      axios.get(payload.url)
        .then(response => {
          commit('updatePokemon', response.data)
          commit('updatePokemonImageUrl', 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + ('000' + response.data.id).substr(-3) + '.png')
        })
      axios.get('https://pokeapi.co/api/v2/pokemon-species/' + payload.name.toLowerCase())
        .then(response => {
          let description = ''
          response.data.flavor_text_entries.forEach(flavorTextEntry => {
            if (flavorTextEntry.language.name === 'en' && description === '') {
              description = flavorTextEntry.flavor_text
            }
          })
          commit('updatePokemonDescription', description)
          axios.get(response.data.evolution_chain.url)
            .then(evolutionChainResponse => commit('updatePokemonEvolutionChain', evolutionChainResponse.data.chain))
        })
    }
  }
})
