import React, { useState, useEffect } from "react";
import styles from "./pokedex.module.scss";

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

interface PokedexProps {
  pokemonData: PokemonData | null;
}

const Pokedex: React.FC<PokedexProps> = ({ pokemonData }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isFrontImage, setIsFrontImage] = useState<boolean>(true);

  useEffect(() => {
    if (pokemonData) {
      setImageUrl(pokemonData.sprites.front_default);
      const interval = setInterval(() => {
        setImageUrl((prevUrl) =>
          prevUrl === pokemonData.sprites.front_default
            ? pokemonData.sprites.back_default
            : pokemonData.sprites.front_default
        );
        setIsFrontImage((prev) => !prev);
      }, 1800);
      return () => clearInterval(interval);
    }
  }, [pokemonData]);

  if (!pokemonData) return null;

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1 className={styles.pokemonName}>
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </h1>
        <div className={styles.imgContainer}>
          <img src={imageUrl} alt="Pokemon Image" className={styles.img} />
        </div>
      </div>
      <div
        id="side"
        className={styles.sideContainer} 
      >
        <div
          id="nav"
          className={styles.nav}
        >
          <div className={styles.abilitiesContainer}>
            <h3>Abilities</h3>
          </div>
          <div className={styles.statsContainer}>
            <h3>Stats</h3>
            {/* <ul>
                {pokemonData.stats.map((stat, index) => (
                    <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
                </ul> */}
          </div>
        </div>
        <div
          id="output"
          style={{ display: "flex", flexDirection: "column", width: "100%", height: '100%', padding: '2%'}}
        >
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <>
                <li className={styles.name}>{ability.ability.name}</li>
                <li style={{padding: '2%'}}>{ability.ability.effect}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
