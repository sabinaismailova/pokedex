import React, { useState } from 'react';
import axios from 'axios';
import styles from './search.module.scss'
import pokedex from '../../public/pokedex.png'

interface PokemonSearchProps {
  onSearch: (data: any) => void;
}

const Search: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState<string>('');

  const handleRequest = async () => {
    if (!pokemonName) {
      alert('Please enter a Pokémon name!');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/pokemon/${pokemonName}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching data from the API:', error);
      alert('Pokémon not found. Please try another name.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={pokedex.src} />
      </div>
      <div className={styles.search}>
        <input
          type="text"
          id="pokemon-name"
          className={styles.input}
          placeholder="Enter Pokémon name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button className={styles.button} onClick={handleRequest}>Search</button>
      </div>
    </div>
  );
};

export default Search;
