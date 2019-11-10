export class PokemonType {
  constructor (offense, defense) {
    this.offense = {
      normal: offense.normal === undefined ? 1: offense.normal,
      fighting: offense.fighting === undefined ? 1 : offense.fighting,
      flying: offense.flying === undefined ? 1 : offense.flying,
      poison: offense.poison === undefined  ? 1 : offense.poison,
      ground: offense.ground === undefined  ? 1 : offense.ground,
      rock: offense.rock === undefined  ? 1 : offense.rock,
      bug: offense.bug === undefined  ? 1 : offense.bug,
      ghost: offense.ghost === undefined  ? 1 : offense.ghost,
      steel: offense.steel === undefined  ? 1 : offense.steel,
      fire: offense.fire === undefined  ? 1 : offense.fire,
      water: offense.water === undefined  ? 1 : offense.water,
      grass: offense.grass === undefined  ? 1 : offense.grass,
      electric: offense.electric === undefined  ? 1 : offense.electric,
      psychic: offense.psychic === undefined  ? 1 : offense.psychic,
      ice: offense.ice === undefined  ? 1 : offense.ice,
      dragon: offense.dragon === undefined  ? 1 : offense.dragon,
      dark: offense.dark === undefined  ? 1 : offense.dark,
      fairy: offense.fairy === undefined  ? 1 : offense.fairy
    }

    this.defense = {
      normal: defense.normal === undefined ? 1: defense.normal,
      fighting: defense.fighting === undefined ? 1 : defense.fighting,
      flying: defense.flying === undefined ? 1 : defense.flying,
      poison: defense.poison === undefined  ? 1 : defense.poison,
      ground: defense.ground === undefined  ? 1 : defense.ground,
      rock: defense.rock === undefined  ? 1 : defense.rock,
      bug: defense.bug === undefined  ? 1 : defense.bug,
      ghost: defense.ghost === undefined  ? 1 : defense.ghost,
      steel: defense.steel === undefined  ? 1 : defense.steel,
      fire: defense.fire === undefined  ? 1 : defense.fire,
      water: defense.water === undefined  ? 1 : defense.water,
      grass: defense.grass === undefined  ? 1 : defense.grass,
      electric: defense.electric === undefined  ? 1 : defense.electric,
      psychic: defense.psychic === undefined  ? 1 : defense.psychic,
      ice: defense.ice === undefined  ? 1 : defense.ice,
      dragon: defense.dragon === undefined  ? 1 : defense.dragon,
      dark: defense.dark === undefined  ? 1 : defense.dark,
      fairy: defense.fairy === undefined  ? 1 : defense.fairy
    }
  }

  multiply (type) {
    Object.keys(type.offense).map(key => {
      this.offense[key] *=type.offense[key]
    })
    Object.keys(type.offense).map(key => {
      this.defense[key] *=type.defense[key]
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
