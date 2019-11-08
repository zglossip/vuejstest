<template>
  <div>
    <div class="row">
      <b-img class="col" :src="imageUrl" alt="Image not found"></b-img>
    </div>
    <div class="row">
      <span class="col">
        {{$store.state.pokemonDescription}}
      </span>
    </div>
    <router-tabs active="POKEMON"></router-tabs>
  </div>
</template>

<script>
import RouterTabs from "./RouterTabs.vue";

export default {
  components: {
    RouterTabs
  },
  computed: {
    imageUrl: function(){
      return 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + ('000' + this.$store.state.pokemonId).substr(-3) + '.png'
    }
  },
  data() {
    return {
      description: ''
    }
  }
}
</script>
