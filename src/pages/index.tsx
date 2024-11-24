import { useState } from "react";
import Search from "../components/Search";
import Pokedex from "../components/Pokedex";
import styles from "./index.module.scss";
import { Pokemon } from "@/components/types/types";

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [triggerGlow, setTriggerGlow] = useState(false);

  const handleSearch = (data: Pokemon) => {
    setPokemon(data);
    triggerGlowEffect();
  };

  const triggerGlowEffect = () => {
    let count = 0;

    const glowCycle = () => {
      setTriggerGlow(true);

      setTimeout(() => {
        setTriggerGlow(false);

        count++;
        if (count < 2) {
          setTimeout(glowCycle, 200);
        }
      }, 400);
    };

    glowCycle();
  };

  return (
    <div className={styles.pageContainer}>
      <Search onSearch={handleSearch} />
      <Pokedex pokemon={pokemon} triggerGlow={triggerGlow} />
    </div>
  );
};

export default Home;
