import React, { useEffect } from "react";
import styles from "./MovementsOutputBox.module.css";

// displays the movements performed by the probe, for example
// 'the probe turned to the left, moved three cells on the y-axis,
// turned right, moved two cells on the x-axis.
const MovementsOutputBox = ({ movementsOutput }) => {
  useEffect(() => {
    console.log(movementsOutput);
  }, [movementsOutput]);

  return (
    <div className={styles.container}>
    <h3 className={styles.h3}>Movements performed</h3>
      <div className={styles.box}>
        {movementsOutput}
      </div>
    </div>
  );
};
export default MovementsOutputBox;
