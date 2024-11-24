export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  types: string[];
}

export interface PokemonAbility {
  name: string;
  effect: string;
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokedexProps {
  pokemon: Pokemon | undefined;
  triggerGlow: boolean;
}
