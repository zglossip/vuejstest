export class PokemonType {
  constructor (defense) {
    this.defense = {
      normal: defense.normal === undefined ? 1 : defense.normal,
      fighting: defense.fighting === undefined ? 1 : defense.fighting,
      flying: defense.flying === undefined ? 1 : defense.flying,
      poison: defense.poison === undefined ? 1 : defense.poison,
      ground: defense.ground === undefined ? 1 : defense.ground,
      rock: defense.rock === undefined ? 1 : defense.rock,
      bug: defense.bug === undefined ? 1 : defense.bug,
      ghost: defense.ghost === undefined ? 1 : defense.ghost,
      steel: defense.steel === undefined ? 1 : defense.steel,
      fire: defense.fire === undefined ? 1 : defense.fire,
      water: defense.water === undefined ? 1 : defense.water,
      grass: defense.grass === undefined ? 1 : defense.grass,
      electric: defense.electric === undefined ? 1 : defense.electric,
      psychic: defense.psychic === undefined ? 1 : defense.psychic,
      ice: defense.ice === undefined ? 1 : defense.ice,
      dragon: defense.dragon === undefined ? 1 : defense.dragon,
      dark: defense.dark === undefined ? 1 : defense.dark,
      fairy: defense.fairy === undefined ? 1 : defense.fairy
    }
  }

  multiply (type) {
    Object.keys(type.defense).map(key => {
      this.defense[key] *= type.defense[key]
    })
  }
}

export const PokemonTypeDefaults = {
  normal: new PokemonType({ fighting: 2, ghost: 0 }),
  fighting: new PokemonType({ bug: 0.5, dark: 0.5, rock: 0.5, fairy: 2, flying: 2, psychic: 2 }),
  flying: new PokemonType({ bug: 0.5, fighting: 0.5, grass: 0.5, electric: 2, ice: 2, rock: 2, ground: 0 }),
  poison: new PokemonType({ fighting: 0.5, poison: 0.5, bug: 0.5, grass: 0.5, fairy: 0.5, ground: 2, psychic: 2 }),
  ground: new PokemonType({ poison: 0.5, rock: 0.5, grass: 2, ice: 2, water: 2, electric: 0 }),
  rock: new PokemonType({ fire: 0.5, flying: 0.5, normal: 0.5, poison: 0.5, fighting: 2, grass: 2, ground: 2, steel: 2, water: 2 }),
  bug: new PokemonType({ fighting: 0.5, grass: 0.5, ground: 0.5, fire: 2, flying: 2, rock: 2 }),
  ghost: new PokemonType({ bug: 0.5, poison: 0.5, dark: 2, ghost: 2, normal: 0, fighting: 0 }),
  steel: new PokemonType({ bug: 0.5, dragon: 0.5, fairy: 0.5, flying: 0.5, grass: 0.5, ice: 0.5, normal: 0.5, psychic: 0.5, rock: 0.5, steel: 0.5, fighting: 2, fire: 2, ground: 2, poison: 0 }),
  fire: new PokemonType({ bug: 0.5, fairy: 0.5, fire: 0.5, grass: 0.5, ice: 0.5, steel: 0.5, ground: 2, rock: 2, water: 2 }),
  water: new PokemonType({ fire: 0.5, ice: 0.5, steel: 0.5, water: 0.5, electric: 2, grass: 2 }),
  grass: new PokemonType({ electric: 0.5, grass: 0.5, ground: 0.5, water: 0.5, bug: 2, fire: 2, flying: 2, ice: 2, poison: 2 }),
  electric: new PokemonType({ electric: 0.5, flying: 0.5, steel: 0.5, ground: 2 }),
  psychic: new PokemonType({ fighting: 0.5, psychic: 0.5, bug: 2, dark: 2, ghost: 2 }),
  ice: new PokemonType({ ice: 0.5, fighting: 2, fire: 2, rock: 2, steel: 2 }),
  dragon: new PokemonType({ electric: 0.5, fire: 0.5, grass: 0.5, water: 0.5, dragon: 2, fairy: 2, ice: 2 }),
  dark: new PokemonType({ dark: 0.5, ghost: 0.5, bug: 2, fairy: 2, fighting: 2, psychic: 0 }),
  fairy: new PokemonType({ bug: 0.5, dark: 0.5, fighting: 0.5, poison: 2, steel: 2, dragon: 0 })
}
