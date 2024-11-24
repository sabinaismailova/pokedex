import React from "react";
import styles from "./pokedex.module.scss";

interface PokemonTypeProps {
  types: string[];
}

const PokemonTypes: React.FC<PokemonTypeProps> = ({ types }) => {
  return (
    <div className={styles.typesScreen}>
      {types.map((type) => (
        <div className={styles.typeContainer}>
          <img
            src={`/pokemonTypes/${type.toLowerCase()}.png`}
            alt={`${type} logo`}
            className={styles.typeLogo}
          />
          <p>{type}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonTypes;
