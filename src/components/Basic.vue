<template>
  <div>
    <div class="row">
      <b-img-lazy class="col" :src="imageUrl"></b-img-lazy>
    </div>
    <div class="row">
      {{description}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      imageUrl: "",
      description: ""
    }
  },
  mounted() {
    this.imageUrl = 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + ('000' + this.pokemonId).substr(-3) + '.png'
    axios.get('https://pokeapi.co/api/v2/pokemon-species/' + this.pokemonId)
      .then(response => {
        response.data.flavor_text_entries.forEach(flavorTextEntry => {
          if(flavorTextEntry.language.name == 'en'){
            this.description = flavorTextEntry.flavor_text
          }
        })
      })
  }
}
</script>
