import {shallowMount} from "@vue/test-utils";
import chai from 'chai';
import Evolution from "../../src/components/Evolution.vue";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

describe('Evolution.vue test', () => {

  const assert = chai.assert;
  const mock = new MockAdapter(axios)

  const url = '/evolutionChain'
  const propsData = {
    chain: {
      species: {url, name: 'Sandshrew'},
      evolution_details: [],
      evolvesTo: {
        species: {name: 'Sandslash'}
      }
    }
  }

  mock.onGet(url).reply(200, {
      id: 27
  })

  const wrapper = shallowMount(Evolution, {propsData});

  it('We get the sprite URL', () => {
    assert(wrapper.vm.spriteUrl === 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png')
  })

})