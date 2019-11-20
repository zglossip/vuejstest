import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: null,
    pokemonDescription: '',
    pokemonEvolutionChain: null,
    pokemonImageUrl: ''
  },
  getters: {
    pokemon: state => state.pokemon ? state.pokemon : {}
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
    },
    reset (state) {
      state.pokemon = {}
      state.pokemonDescription = ''
      state.pokemonEvolutionChain = {}
      state.pokemonImageUrl = ''
    }
  },
  actions: {
    updatePokemon ({ commit }, payload) {
      router.push('/')
      commit('reset')
      if (payload.url) {
        axios.get(payload.url)
          .then(response => {
            commit('updatePokemon', response.data)
            commit('updatePokemonImageUrl', 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + ('000' + response.data.id).substr(-3) + '.png')
          })
      } else {
        commit('updatePokemon', payload)
        commit('updatePokemonImageUrl', 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + ('000' + payload.id).substr(-3) + '.png')
      }
      axios.get('https://pokeapi.co/api/v2/pokemon-species/' + payload.name.toLowerCase())
        .then(response => {
          let description = ''
          response.data.flavor_text_entries.forEach(flavorTextEntry => {
            if (flavorTextEntry.language.name === 'en' && description === '') {
              description = flavorTextEntry.flavor_text
            }
          })
          commit('updatePokemonDescription', description)
          router.push('/pokemon')
          axios.get(response.data.evolution_chain.url)
            .then(evolutionChainResponse => commit('updatePokemonEvolutionChain', evolutionChainResponse.data.chain))
        })
    }
  }
})
