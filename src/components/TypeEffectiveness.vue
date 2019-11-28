<template>
  <div>
    <router-tabs active="TYPE_EFFECTIVENESS" />
    <div class="row">
      <div class="card pokemon-container pokemon-container-list col-12">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-primary">
            <h5>
              <strong>Immune to</strong>
              <type-badge
                v-for="typeName in zeroXTypesDefense"
                :key="typeName + 'zeroXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="zeroXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
          <li class="list-group-item list-group-item-info">
            <h5>
              <strong>Very strong against</strong>
              <type-badge
                v-for="typeName in quarterXTypesDefense"
                :key="typeName + 'quarterXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="quarterXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
          <li class="list-group-item list-group-item-success">
            <h5>
              <strong>Strong against</strong>
              <type-badge
                v-for="typeName in halfXTypesDefense"
                :key="typeName + 'halfXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="halfXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>Normal against</strong>
              <type-badge
                v-for="typeName in oneXTypesDefense"
                :key="typeName + 'oneXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="oneXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
          <li class="list-group-item list-group-item-warning">
            <h5>
              <strong>Weak against</strong>
              <type-badge
                v-for="typeName in twoXTypesDefense"
                :key="typeName + 'twoXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="twoXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
          <li class="list-group-item list-group-item-danger">
            <h5>
              <strong>Very weak against</strong>
              <type-badge
                v-for="typeName in fourXTypesDefense"
                :key="typeName + 'fourXDefense'"
                :type-name="typeName"
              />
              <b-badge
                v-if="fourXTypesDefense.length == 0"
                pill
              >
                None
              </b-badge>
            </h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TypeBadge from './TypeBadge.vue'
import RouterTabs from './RouterTabs.vue'
import { PokemonType, PokemonTypeDefaults } from '../util/PokemonType.js'

export default {
  components: { TypeBadge, RouterTabs },
  data () {
    return {
      fourXTypesDefense: [],
      twoXTypesDefense: [],
      oneXTypesDefense: [],
      halfXTypesDefense: [],
      quarterXTypesDefense: [],
      zeroXTypesDefense: []
    }
  },
  mounted () {
    const pokemonType = new PokemonType({}, {})
    this.$store.state.pokemon.types.forEach(type => {
      pokemonType.multiply(PokemonTypeDefaults[type.type.name])
    })

    Object.keys(pokemonType.defense).map(key => {
      const value = pokemonType.defense[key]
      if (value === 4) {
        this.fourXTypesDefense.push(key)
      } else if (value === 2) {
        this.twoXTypesDefense.push(key)
      } else if (value === 1) {
        this.oneXTypesDefense.push(key)
      } else if (value === 0.5) {
        this.halfXTypesDefense.push(key)
      } else if (value === 0.25) {
        this.quarterXTypesDefense.push(key)
      } else {
        this.zeroXTypesDefense.push(key)
      }
    })
  }
}
</script>
