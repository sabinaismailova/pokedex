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
        <div className={styles.pokedexTop}>
          <div className={styles.bigCircle}>
            <div className={styles.smallerCircle}></div>
          </div>
          <div className={styles.bleepers}>
            <div className={styles.smallCircle1}></div>
            <div className={styles.smallCircle2}></div>
            <div className={styles.smallCircle3}></div>
          </div>
        </div>
        <div className={styles.infoScreenOuter}>
          <div className={styles.infoScreen}>
            <h1 className={styles.pokemonName}>
              {pokemonData.name.charAt(0).toUpperCase() +
                pokemonData.name.slice(1)}
            </h1>
            <div className={styles.imgContainer}>
              <img src={imageUrl} alt="Pokemon Image" className={styles.img} />
            </div>
          </div>
        </div>
      </div>
      <div id="side" className={styles.sideContainer}>
        <div className={styles.statsScreenOuter}>
          <div className={styles.statsScreen}>
            <div id="nav" className={styles.nav}>
              <div className={styles.abilities}>
                <h3>Abilities</h3>
              </div>
              <div className={styles.stats}>
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
            <div id="output" className={styles.statsInfo}>
              <ul>
                {pokemonData.abilities.map((ability, index) => (
                  <>
                    <li className={styles.statName}>{ability.ability.name}</li>
                    <li style={{ padding: "4%" }}>{ability.ability.effect}</li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
