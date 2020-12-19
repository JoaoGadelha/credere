import React from "react";
import styles from "./Controls.module.css";
import { turnProbe, moveForward, postData } from "./functions";

const Controls = ({
  NLmovements,
  setNLmovements,
  instructions,
  setInstructions,
}) => {
  return (
    <div class={styles.container}>
      <button
        onClick={() =>
          turnProbe(
            "left",
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
            "right",
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
        onClick={() =>
          postData("https://credere-backend.herokuapp.com/resetPosition)", {})
        }
      >
        Reset probe position
      </button>
    </div>
  );
};
export default Controls;
