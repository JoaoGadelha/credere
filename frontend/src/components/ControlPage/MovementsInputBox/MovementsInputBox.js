import React from "react";
import styles from "./MovementsInputBox.module.css";
import { postData } from "./functions";

// displays the queue of instructions to be sent
// to the space probe in natural language
// (i.e. "turn to the right, move forward").
// also displays a button to send the data to the probe.
const MovementsInputBox = ({ NLmovements }) => {
  return (
    <div className={styles.container}>
      <h3
        className={styles.h3}
      >
        Movement instructions
      </h3>
      <div className={styles.box}>
        {NLmovements.map((item) => (
          <p className={styles.p}>{item}</p>
        ))}
      </div>
    </div>
  );
};
export default MovementsInputBox;
