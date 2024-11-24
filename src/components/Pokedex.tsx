import React, { useEffect, useState } from "react";
import styles from "./pokedex.module.scss";
import StatsScreen from "./StatsScreen";
import PokedexAnimation from "./PokedexAnimation";
import {PokedexProps} from './types/types'
import InfoScreen from "./InfoScreen";
import PokemonTypes from "./PokemonTypes";

const Pokedex: React.FC<PokedexProps> = ({ pokemon, triggerGlow }) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    if (pokemon) {
      setImageUrl(pokemon.sprites.front_default);
      const interval = setInterval(() => {
        setImageUrl((prevUrl) =>
          prevUrl === pokemon.sprites.front_default
            ? pokemon.sprites.back_default
            : pokemon.sprites.front_default
        );
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [pokemon]);

  if (!pokemon) return null;

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <PokedexAnimation glow={triggerGlow}/>
        <InfoScreen pokemon={pokemon}/>
        <PokemonTypes types={pokemon.types}/>
      </div>
      <div id="side" className={styles.sideContainer}>
        <StatsScreen abilities={pokemon.abilities} stats={pokemon.stats} />
      </div>
    </div>
  );
};

export default Pokedex;
