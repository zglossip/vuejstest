<template>
  <div class="col">
    <sprite-image
      :sprite-url="spriteUrl"
      :name="chain.species.name"
      :show-arrow="chain.evolution_details.length > 0"
    />
    <div class="row">
      <evolution
        v-for="nextEvolution in chain.evolves_to"
        :key="nextEvolution.species.name"
        :chain="nextEvolution"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SpriteImage from './SpriteImage.vue'

export default {
  name: 'Evolution',
  components: { SpriteImage },
  props: {
    chain: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      spriteUrl: ''
    }
  },
  mounted () {
    axios.get(this.chain.species.url)
      .then(response => {
        this.spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + response.data.id + '.png'
      })
  }
}
</script>
