<template>
  <div>
  <div class="col">
    {{chain.species.name}}
  </div>
  <evolution v-for="nextEvolution in chain.evolves_to" v-bind:chain="nextEvolution"></evolution>
  </div>
</template>

<script>
  export default {
    name: 'evolution',
    props: {
      chain: {
        type: Object,
        required: true
      }
    }
  }
</script>