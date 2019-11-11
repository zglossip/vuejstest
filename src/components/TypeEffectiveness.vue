<template>
  <div>
    <router-tabs active="TYPE_EFFECTIVENESS"></router-tabs>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item list-group-item-info">
            Offense
          </li>
          <li class="list-group-item">
            <h5>
              <strong>4x:</strong>
              <type-badge v-for="typeName in fourXTypesOffense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>2x:</strong>
              <type-badge v-for="typeName in twoXTypesOffense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1x:</strong>
              <type-badge v-for="typeName in oneXTypesOffense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1/2x:</strong>
              <type-badge v-for="typeName in halfXTypesOffense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>0x:</strong>
              <type-badge v-for="typeName in zeroXTypesOffense" :type-name="typeName"></type-badge>
            </h5>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item list-group-item-danger">
            Defense
          </li>
          <li class="list-group-item">
            <h5>
              <strong>0x:</strong>
              <type-badge v-for="typeName in zeroXTypesDefense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1/2x:</strong>
              <type-badge v-for="typeName in halfXTypesDefense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1x:</strong>
              <type-badge v-for="typeName in oneXTypesDefense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>2x:</strong>
              <type-badge v-for="typeName in twoXTypesDefense" :type-name="typeName"></type-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>4x:</strong>
              <type-badge v-for="typeName in fourXTypesDefense" :type-name="typeName"></type-badge>
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TypeBadge from "./TypeBadge.vue";
import RouterTabs from "./RouterTabs.vue";
import {PokemonType, PokemonTypeDefaults} from "../util/PokemonType.js";

export default {
  components: {TypeBadge, RouterTabs},
  data() {
    return {
      fourXTypesOffense: [],
      twoXTypesOffense: [],
      oneXTypesOffense: [],
      halfXTypesOffense: [],
      zeroXTypesOffense: [],
      fourXTypesDefense: [],
      twoXTypesDefense: [],
      oneXTypesDefense: [],
      halfXTypesDefense: [],
      zeroXTypesDefense: []
    }
  },
  mounted() {
    let pokemonType = new PokemonType({}, {})
    this.$store.state.pokemon.types.forEach(type => {
      pokemonType.multiply(PokemonTypeDefaults[type.type.name])
    })
    Object.keys(pokemonType.offense).map(key => {
      let value = pokemonType.offense[key]
      if(value === 4){
        this.fourXTypesOffense.push(key)
      } else if (value === 2){
        this.twoXTypesOffense.push(key)
      } else if(value === 1){
        this.oneXTypesOffense.push(key)
      } else if(value === .5){
        this.halfXTypesOffense.push(key)
      } else {
        this.zeroXTypesOffense.push(key)
      }
    })

    Object.keys(pokemonType.defense).map(key => {
      let value = pokemonType.defense[key]
      if(value === 4){
        this.fourXTypesDefense.push(key)
      } else if (value === 2){
        this.twoXTypesDefense.push(key)
      } else if(value === 1){
        this.oneXTypesDefense.push(key)
      } else if(value === .5){
        this.halfXTypesDefense.push(key)
      } else {
        this.zeroXTypesDefense.push(key)
      }
    })
  }
}
</script>
