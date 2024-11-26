import React from "react";
import styles from "./pokedex.module.scss";

interface PokemonTypeProps {
  types: string[] | undefined;
}

const PokemonTypes: React.FC<PokemonTypeProps> = ({ types }) => {
  return (
    <div className={styles.typesScreen}>
      {types &&
        types.map((type, key) => (
          <div className={styles.typeContainer} key={key}>
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
