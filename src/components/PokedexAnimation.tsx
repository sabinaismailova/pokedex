import React from "react";
import styles from "./pokedex.module.scss"

interface PokedexAnimationProps {
    glow: boolean;
}

const PokedexAnimation: React.FC<PokedexAnimationProps> = ({glow}) => {
  return (
    <div className={styles.pokedexTop}>
      <div
        className={`${styles.bigCircle} ${
          glow ? styles.glowingBlue : ""
        }`}
      >
        <div className={styles.smallerCircle}></div>
      </div>
      <div className={styles.bleepers}>
        <div
          className={`${styles.smallCircle1} ${
            glow ? styles.glowingRed : ""
          }`}
        ></div>
        <div
          className={`${styles.smallCircle2} ${
            glow ? styles.glowingYellow : ""
          }`}
        ></div>
        <div
          className={`${styles.smallCircle3} ${
            glow ? styles.glowingGreen : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PokedexAnimation;
