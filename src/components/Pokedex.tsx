import React, { useEffect, useState } from "react";
import styles from "./pokedex.module.scss";
import StatsScreen from "./StatsScreen";

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

interface PokedexProps {
  pokemon: Pokemon | null;
  triggerGlow: boolean;
}

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
        <div className={styles.pokedexTop}>
          <div
            className={`${styles.bigCircle} ${
              triggerGlow ? styles.glowingBlue : ""
            }`}
          >
            <div className={styles.smallerCircle}></div>
          </div>
          <div className={styles.bleepers}>
            <div
              className={`${styles.smallCircle1} ${
                triggerGlow ? styles.glowingRed : ""
              }`}
            ></div>
            <div
              className={`${styles.smallCircle2} ${
                triggerGlow ? styles.glowingYellow : ""
              }`}
            ></div>
            <div
              className={`${styles.smallCircle3} ${
                triggerGlow ? styles.glowingGreen : ""
              }`}
            ></div>
          </div>
        </div>
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
      </div>
      <div id="side" className={styles.sideContainer}>
        <StatsScreen abilities={pokemon.abilities} stats={pokemon.stats} />
      </div>
    </div>
  );
};

export default Pokedex;
