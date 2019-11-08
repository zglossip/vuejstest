<template>
  <div class="text-center">
    <b-badge variant="info" v-if="showArrow">
      <font-awesome-icon icon="arrow-circle-down"></font-awesome-icon>
    </b-badge>
    <b-img
        :id="name + 'image'"
        :src="spriteUrl"
        center
        :class="$store.state.pokemon.name === name ? 'border border-info rounded-circle' : 'rounded-circle'"
    ></b-img>
    <figcaption class="figure-caption">{{name.toUpperCase()}}</figcaption>
  </div>
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(faArrowCircleDown)

  export default {
    components: {FontAwesomeIcon},
    props: {
      spriteUrl: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      showArrow: {
        type: Boolean,
        required: true
      }
    }
  }
</script>