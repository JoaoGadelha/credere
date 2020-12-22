import React from "react";
import styles from "./Controls.module.css";
import { turnProbe, moveForward, postData } from "./functions";

// renders the control buttons such as
// 'turn probe left', 'send instructions
// to probe' and 'move probe forward'.
const Controls = ({
  NLmovements,
  setNLmovements,
  instructions,
  setInstructions,
  setProbeData,
  setMovementsOutput,
}) => {
  return (
    <div className={styles.container}>
      <button
        onClick={() =>
          turnProbe(
            "GE",
            NLmovements,
            setNLmovements,
            instructions,
            setInstructions
          )
        }
      >
        Turn probe to the left
      </button>
      <button
        onClick={() =>
          turnProbe(
            "GD",
            NLmovements,
            setNLmovements,
            instructions,
            setInstructions
          )
        }
      >
        Turn probe to the right
      </button>
      <button
        onClick={() =>
          moveForward(
            NLmovements,
            setNLmovements,
            instructions,
            setInstructions
          )
        }
      >
        Move forward
      </button>
      <button
        onClick={() => {
          postData("https://credere-backend.herokuapp.com/resetPosition", {});
          setProbeData({ x: 0, y: 0, direction: "D" });
        }}
      >
        Reset probe position
      </button>
      <button
        onClick={async () => {
          let result = await postData(
            "https://credere-backend.herokuapp.com/moveProbe",
            { movements: instructions }
          );
          // if the backend didn't return
          // an error message, update
          // the probe position and direction
          if (result.error === undefined) {
            setProbeData(result);
            setMovementsOutput(result.NLinstructions);
          } else {
            setMovementsOutput(result.error);
          }
          setNLmovements([]);
          setInstructions([]);
        }}
        className={styles.button}
      >
        Submit movements
      </button>
      <button
        onClick={() => {
          setNLmovements([]);
          setInstructions([]);
        }}
        className={styles.button}
      >
        Clear movements queue
      </button>
    </div>
  );
};
export default Controls;
