import { mount, createLocalVue} from "@vue/test-utils"
import chai from 'chai'
import Vuex from 'vuex'
import Basic from "../../src/components/Basic.vue"

const assert = chai.assert
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Basic.vue test', () => {
  let pokemon
  let pokemonImageUrl
  let pokemonDescription
  let store

  before(() => {
    pokemon = {
      name: 'lapras',
      types: [
        {type: {name: 'ice'}},
        {type: {name: 'water'}}
      ]
    }
    pokemonImageUrl = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/131.png'
    pokemonDescription = 'It likes swimming around with people on its back. In the Alola region, it’s an important means of transportation over water.'
    store = new Vuex.Store({state: {
      pokemon: pokemon, pokemonImageUrl: pokemonImageUrl, pokemonDescription: pokemonDescription
    }})
  })

  it('Has picture', () => {
    const wrapper = mount(Basic, {store, localVue})
    const image = wrapper.find('.card-img-top')
    assert(image)
  })
})