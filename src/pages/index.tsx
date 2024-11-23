import { useState } from 'react';
import Search from '../components/Search';
import Pokedex from '../components/Pokedex';
import styles from './index.module.scss'

// Define types for the Pokémon data
interface PokemonAbility {
  name: string;
  effect: string;
}

interface PokemonStat {
  name: string;
  value: number;
}

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSearch = (data: Pokemon) => {
    setPokemon(data);
  };

  return (
    <div className={styles.pageContainer}>
      <Search onSearch={handleSearch} />
      {/* Pass abilities and stats separately to Pokedex/StatsScreen */}
      {pokemon && <Pokedex pokemon={pokemon}/>}
    </div>
  );
};

export default Home;
