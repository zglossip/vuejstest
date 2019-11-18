<template>
  <div class="row">
    <b-nav
      tabs
      fill
      class="col-12"
    >
      <b-nav-item
        :active="active === 'POKEMON'"
        to="pokemon"
      >
        Pokemon
      </b-nav-item>
      <b-nav-item
        :active="active === 'EVOLUTION'"
        to="evolution"
      >
        Evolution
      </b-nav-item>
      <b-nav-item
        :active="active === 'TYPE_EFFECTIVENESS'"
        to="typeEffectiveness"
      >
        Type Effectiveness
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    }
  }
}
</script>
