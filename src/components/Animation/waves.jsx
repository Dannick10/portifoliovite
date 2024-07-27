import React from "react";
import styles from "./waves.module.css";

const Waves = () => {
  return (
    <div className={styles.containerWaves}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={styles.waves}
        preserveAspectRatio="none"
        viewBox="0 24 150 28"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          ></path>
        </defs>
        <g className={styles.parallax}>
          <use x="48" fill="rgba(220,68,55,0.5" xlinkHref="#gentle-wave"></use>
          <use
            x="48"
            y="3"
            fill="rgba(240,70,75,0.3)"
            xlinkHref="#gentle-wave"
          ></use>
          <use
            x="48"
            y="5"
            fill="rgba(255,60,60,0.5)"
            xlinkHref="#gentle-wave"
          ></use>
          <use
            x="48"
            y="7"
            fill="rgba(245,49,49,0.8)"
            xlinkHref="#gentle-wave"
          ></use>
        </g>
      </svg>
    </div>
  );
};

export default Waves;
