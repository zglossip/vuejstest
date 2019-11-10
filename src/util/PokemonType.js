export class PokemonType {
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

export const PokemonTypeDefaults = {
      normal: new PokemonType({rock: 0.5, steel: 0.5, ghost: 0}, {fighting: 2, ghost: 0}),
      fighting: new PokemonType({dark: 2, ice: 2, normal: 2, rock: 2, steel: 2, bug: 0.5, fairy: 0.5, flying: 0.5, poison: 0.5, psychic: 0.5}, {bug: 0.5, dark: 0.5, rock: 0.5, fairy: 2, flying: 2, psychic: 2}),
      flying: new PokemonType({bug: 2, fighting: 2, grass: 2, electric: 0.5, rock: 0.5, steel: 0.5}, {bug: 0.5, fighting: 0.5, grass: 0.5, electric: 2, ice: 2, rock: 2, ground: 0}),
      poison: new PokemonType({fairy: 2, grass: 2, poison: .5, ground: .5, rock: .5, ghost: .5, steel: 0}, {fighting: .5, poison: .5, bug: .5, grass: .5, fairy: .5, ground: 2, psychic: 2}),
      ground: new PokemonType({electric: 2, fire: 2, poison: 2, rock: 2, steel: 2, bug: .5, grass: .5, flying: 0}, {poison: .5, rock: .5, grass: 2, ice: 2, water: 2, electric: 0}),
      rock: new PokemonType({bug: 2, fire: 2, flying: 2, ice: 2, fighting: .5, ground: .5, steel: .5}, {fire: .5, flying: .5, normal: .5, poison: .5, fighting: 2, grass: 2, ground: 2, steel: 2, water: 2}),
      bug: new PokemonType({dark: 2, grass: 2, psychic: 2, fairy: .5, fighting: .5, fire: .5, flying: .5, ghost: .5, poison: .5, steel: .5}, {fighting: .5, grass: .5, ground: .5, fire: 2, flying: 2, rock: 2}),
      ghost: new PokemonType({ghost: 2, psychic: 2, dark: .5, normal: 0}, {bug: .5, poison: .5, dark: 2, ghost: 2, normal: 0, fighting: 0}),
      steel: new PokemonType({ice: 2, rock: 2, electric: .5, fire: .5, steel: .5, water: .5}, {bug: .5, dark: .5, dragon: .5, flying: .5, ghost: .5, grass: .5, ice: .5, normal: .5, psychic: .5, rock: .5, steel: .5, fighting: 2, fire: 2, ground: 2, poison: 0}),
      fire: new PokemonType({bug: 2, grass: 2, ice: 2, steel: 2, dragon: .5, fire: .5, rock: .5, water: .5}, {bug: .5, fairy: .5, fire: .5, grass: .5, ice: .5, steel: .5, ground: 2, rock: 2, water: 2}),
      water: new PokemonType({fire: 2, ground: 2, rock: 2, dragon: .5, grass: .5, water: .5}, {fire: .5, ice: .5, steel: .5, water: .5, electric: 2, grass: 2}),
      grass: new PokemonType({ground: 2, rock: 2, water: 2, bug: .5, dragon: .5, fire: .5, flying: .5, grass: .5, poison: .5, steel: .5}, {electric: .5, grass: .5, ground: .5, bug: 2, fire: 2, flying: 2, ice: 2, poison: 2}),
      electric: new PokemonType({flying: 2, water: 2, dragon: .5, electric: .5, grass: .5, ground: 0}, {electric: .5, flying: .5, steel: .5, ground: 2}),
      psychic: new PokemonType({fighting: 2, poison: 2, psychic: .5, steel: .5, dark: 0}, {fighting: .5, psychic: .5, bug: 2, dark: 2, ghost: 2}),
      ice: new PokemonType({dragon: 2, flying: 2, grass: 2, ground: 2, fire: .5, ice: .5, steel: .5, water: .5}, {ice: .5, fighting: 2, fire: 2, rock: 2, steel: 2}),
      dragon: new PokemonType({dragon: 2}, {electric: .5, fire: .5, grass: .5, water: .5, dragon: 2, ice: 2}),
      dark: new PokemonType({ghost: 2, psychic: 2, dark: .5, fairy: .5, fighting: .5}, {dark: .5, ghost: .5, bug: 2, fairy: 2, fighting: 2, psychic: 0}),
      fairy: new PokemonType({dark: 2, dragon: 2, fighting: 2, fire: .5, poison: .5, steel: .5}, {bug: .5, dark: .5, fighting: .5, poison: 2, steel: 2, dragon: 0})

}
