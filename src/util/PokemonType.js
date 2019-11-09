class PokemonType {
  constructor (offense, defense) {
    this.offense = {
      normal: offense.normal ? offense.normal : 1,
      fighting: offense.fighting ? offense.fighting : 1,
      flying: offense.flying ? offense.flying : 1,
      poison: offense.poison ? offense.poison : 1,
      ground: offense.ground ? offense.ground : 1,
      rock: offense.rock ? offense.rock : 1,
      bug: offense.bug ? offense.bug : 1,
      ghost: offense.ghost ? offense.ghost : 1,
      steel: offense.steel ? offense.steel : 1,
      fire: offense.fire ? offense.fire : 1,
      water: offense.water ? offense.water : 1,
      grass: offense.grass ? offense.grass : 1,
      electric: offense.electric ? offense.electric : 1,
      psychic: offense.psychic ? offense.psychic : 1,
      ice: offense.ice ? offense.ice : 1,
      dragon: offense.dragon ? offense.dragon : 1,
      dark: offense.dark ? offense.dark : 1,
      fairy: offense.fairy ? offense.fairy : 1
    }

    this.defense = {
      normal: defense.normal ? defense.normal : 1,
      fighting: defense.fighting ? defense.fighting : 1,
      flying: defense.flying ? defense.flying : 1,
      poison: defense.poison ? defense.poison : 1,
      ground: defense.ground ? defense.ground : 1,
      rock: defense.rock ? defense.rock : 1,
      bug: defense.bug ? defense.bug : 1,
      ghost: defense.ghost ? defense.ghost : 1,
      steel: defense.steel ? defense.steel : 1,
      fire: defense.fire ? defense.fire : 1,
      water: defense.water ? defense.water : 1,
      grass: defense.grass ? defense.grass : 1,
      electric: defense.electric ? defense.electric : 1,
      psychic: defense.psychic ? defense.psychic : 1,
      ice: defense.ice ? defense.ice : 1,
      dragon: defense.dragon ? defense.dragon : 1,
      dark: defense.dark ? defense.dark : 1,
      fairy: defense.fairy ? defense.fairy : 1
    }
  }

  multiply (type) {
    type.offense.forEach((value, key) => {
      this.offense[key] *= value
    })
    type.defense.forEach((value, key) => {
      this.defense[key] *= value
    })
  }
}

export default class {
  constructor () {
    this.normalType = new PokemonType({ rock: 0.5, steel: 0.5, ghost: 0 }, { fighting: 2, ghost: 0 })
    this.fightingType = new PokemonType({ dark: 2, ice: 2, normal: 2, rock: 2, steel: 2, bug: 0.5, fairy: 0.5, flying: 0.5, poison: 0.5, psychic: 0.5 }, { bug: 0.5, dark: 0.5, rock: 0.5, fairy: 2, flying: 2, psychic: 2 })
    this.flyingType = new PokemonType({ bug: 2, fighting: 2, grass: 2, electric: 0.5, rock: 0.5, steel: 0.5 }, { bug: 0.5, fighting: 0.5, grass: 0.5, electric: 2, ice: 2, rock: 2, ground: 0 })
  }
}
