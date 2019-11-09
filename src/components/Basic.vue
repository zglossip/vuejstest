<template>
  <div>
    <router-tabs active="POKEMON" />
    <div class="row">
      <div class="card">
        <b-img
          class="card-img-top"
          :src="$store.state.pokemonImageUrl"
          alt="Image not found"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ $store.state.pokemon.name.toUpperCase() }}
          </h5>
          <p>
            {{ $store.state.pokemonDescription }}
          </p>
          <p>
            <type-badge
              v-for="typeSlot in $store.state.pokemon.types"
              :key="typeSlot.type.name"
              :type-name="typeSlot.type.name"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RouterTabs from './RouterTabs.vue'
import TypeBadge from './TypeBadge.vue'
export default {
  components: { RouterTabs, TypeBadge }
}
</script>
