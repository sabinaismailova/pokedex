import React, { useEffect, useState } from "react";
import styles from "./pokedex.module.scss";
import { Pokemon } from "./types/types";

interface InfoScreenProps {
  pokemon: Pokemon;
}

const InfoScreen: React.FC<InfoScreenProps> = ({ pokemon }) => {
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
    <div className={styles.infoScreenOuter}>
      <div className={styles.infoScreen}>
        <h1 className={styles.pokemonName}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h1>
        <div className={styles.imgContainer}>
          <img src={imageUrl} alt="Pokemon Image" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;
