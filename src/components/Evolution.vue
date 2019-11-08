<template>
  <div class="col">
    <b-img :src="spriteUrl" />
    <div class="row">
      <evolution v-for="nextEvolution in chain.evolves_to" v-bind:chain="nextEvolution"></evolution>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'evolution',
    props: {
      chain: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        spriteUrl: ''
      }
    },
    mounted() {
      axios.get(this.chain.species.url)
        .then(response => {
          this.spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ response.data.id + '.png'
        })
    }
  }
</script>