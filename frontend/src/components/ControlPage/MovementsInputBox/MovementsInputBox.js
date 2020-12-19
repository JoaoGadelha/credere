import React, { useState } from "react";
import styles from "./MovementsInputBox.module.css";
import { postData } from "./functions";

const MovementsInputBox = ({ NLmovements, instructions }) => {
  let [response, setResponse] = useState();
  return (
    <div className={styles.container}>
      {NLmovements.map((item) => (
        <p>{item}</p>
      ))}
      <input
        className={styles.input}
        placeholder="Input movements for the space probe..."
      ></input>
      <button
        onClick={() =>
          postData(
            "https://credere-backend.herokuapp.com/moveProbe",
            {
              movements: instructions,
            },
            setResponse
          )
        }
      >
        Submit Movements
      </button>
    </div>
  );
};
export default MovementsInputBox;
