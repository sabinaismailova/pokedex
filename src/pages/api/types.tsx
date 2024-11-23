export type PokemonAbility = {
  ability: {
    name: string;
  };
}

export type PokemonStat = {
  stat: {
    name: string;
  };
  base_stat: number;
}

export type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

