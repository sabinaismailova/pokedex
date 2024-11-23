import { useState } from 'react';
import Search from '../components/Search';
import Pokedex from '../components/Pokedex';
import styles from './index.module.scss'

// Define types for the Pokémon data
interface PokemonAbility {
  ability: {
    name: string;
    effect: string;
  };
}

interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  const handleSearch = (data: PokemonData) => {
    setPokemonData(data);
  };

  return (
    <div className={styles.pageContainer}>
      <Search onSearch={handleSearch} />
      <Pokedex pokemonData={pokemonData} />
    </div>
  );
};

export default Home;