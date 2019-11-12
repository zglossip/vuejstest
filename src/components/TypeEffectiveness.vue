<template>
  <div>
    <router-tabs active="TYPE_EFFECTIVENESS" />
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item list-group-item-info">
            Offense
          </li>
          <li class="list-group-item">
            <h5>
              <strong>4x:</strong>
              <type-badge
                v-for="typeName in fourXTypesOffense"
                :key="typeName + 'fourXOffense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>2x:</strong>
              <type-badge
                v-for="typeName in twoXTypesOffense"
                :key="typeName + 'twoXOffense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1x:</strong>
              <type-badge
                v-for="typeName in oneXTypesOffense"
                :key="typeName + 'oneXOffense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1/2x:</strong>
              <type-badge
                v-for="typeName in halfXTypesOffense"
                :key="typeName + 'halfXOffense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>0x:</strong>
              <type-badge
                v-for="typeName in zeroXTypesOffense"
                :key="typeName + 'zeroXOffense'"
                :type-name="typeName"
              />
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
              <type-badge
                v-for="typeName in zeroXTypesDefense"
                :key="typeName + 'zeroXDefense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1/2x:</strong>
              <type-badge
                v-for="typeName in halfXTypesDefense"
                :key="typeName + 'halfXDefense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>1x:</strong>
              <type-badge
                v-for="typeName in oneXTypesDefense"
                :key="typeName + 'oneXDefense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>2x:</strong>
              <type-badge
                v-for="typeName in twoXTypesDefense"
                :key="typeName + 'twoXDefense'"
                :type-name="typeName"
              />
            </h5>
          </li>
          <li class="list-group-item">
            <h5>
              <strong>4x:</strong>
              <type-badge
                v-for="typeName in fourXTypesDefense"
                :key="typeName + 'fourXDefense'"
                :type-name="typeName"
              />
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
  mounted () {
    const pokemonType = new PokemonType({}, {})
    this.$store.state.pokemon.types.forEach(type => {
      pokemonType.multiply(PokemonTypeDefaults[type.type.name])
    })
    Object.keys(pokemonType.offense).map(key => {
      const value = pokemonType.offense[key]
      if (value === 4) {
        this.fourXTypesOffense.push(key)
      } else if (value === 2) {
        this.twoXTypesOffense.push(key)
      } else if (value === 1) {
        this.oneXTypesOffense.push(key)
      } else if (value === 0.5) {
        this.halfXTypesOffense.push(key)
      } else {
        this.zeroXTypesOffense.push(key)
      }
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
      } else {
        this.zeroXTypesDefense.push(key)
      }
    })
  }
}
</script>
