import React from "react";
import styles from "./Controls.module.css";

const Controls = () => {
  return (
    <div class={styles.container}>
      <button>Girar à esquerda</button>
      <button>Girar à direita</button>
      <button>Avançar</button>
    </div>
  );
};
export default Controls;
