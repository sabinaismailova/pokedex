import React, { useState } from "react";
import axios from "axios";
import styles from "./search.module.scss";
import pokedex from "../../public/pokedex.png";
import {Pokemon} from "./types/types"

interface PokemonSearchProps {
  onSearch: (data: Pokemon) => void;
}

const Search: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  const [pokemonName, setPokemonName] = useState<string>("");

  const playSound = (link:string) => {
    const sound = new Audio(link);
    sound.play();
  };

  const handleRequest = async () => {
    if (!pokemonName) {
      alert("Please enter a Pokémon name!");
      return;
    }

    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/pokemon/${pokemonName}`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      });
      onSearch(response.data);
      console.log(response.data.cry);
      playSound(response.data.cry);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      alert("Pokémon not found. Please try another name.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRequest();
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
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          onKeyDown={handleKeyPress}
          placeholder="Enter Pokémon name"
          className={styles.input}
        />
        <button onClick={handleRequest} className={styles.button}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
