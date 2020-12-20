import React from "react";
import styles from "./MovementsOutputBox.module.css";

// displays the movements performed by the probe, for example
// 'the probe turned to the left, moved three cells on the y-axis,
// turned right, moved two cells on the x-axis.
const MovementsOutputBox = ({instructions}) => {
    

  return <div className={styles.container}>
    <h3 className={styles.h3}>Movements performed</h3>
  </div>;
};
export default MovementsOutputBox;
