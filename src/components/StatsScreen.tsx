import React, { useState } from "react";
import styles from "./pokedex.module.scss";

interface PokemonAbility {
  name: string;
  effect: string;
}

interface PokemonStat {
  name: string;
  value: number;
}

interface StatsScreenProps {
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

const StatsScreen: React.FC<StatsScreenProps> = ({ abilities, stats }) => {
  const [activeTab, setActiveTab] = useState("abilities");

  return (
    <div className={styles.statsScreenOuter}>
      <div className={styles.statsScreen}>
        <div id="nav" className={styles.nav}>
          <button
            className={
              activeTab === "abilities" ? styles.activeStat : styles.abilities
            }
            onClick={() => setActiveTab("abilities")}
          >
            Abilities
          </button>
          <button
            className={activeTab === "stats" ? styles.activeStat : styles.stats}
            onClick={() => setActiveTab("stats")}
          >
            Stats
          </button>
        </div>
        <div id="output" className={styles.statsContent}>
          {activeTab === "abilities" && (
            <ul>
              {abilities.map((ability, index) => (
                <li key={index}>
                  <p className={styles.statName}>{ability.name}</p>
                  <p style={{ padding: "4%" }}>{ability.effect}</p>
                </li>
              ))}
            </ul>
          )}
          {activeTab === "stats" && (
            <ul>
              {stats.map((stat, index) => (
                <li key={index} className={styles.statItem}>
                  <span className={styles.statName}>{stat.name}</span>
                  <span className={styles.statValue}>{stat.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsScreen;
