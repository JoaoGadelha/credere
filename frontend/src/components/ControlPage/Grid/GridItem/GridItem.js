import React, { useEffect, useState } from "react";
import styles from "./GridItem.module.css";

const GridItem = ({ data }) => {
  let [rotate, setRotate] = useState(0);
  useEffect(() => {
    if (data.direction !== null) {
      if (data.direction === "right") {
        setRotate(90);
      } else if (data.direction === "up") {
        setRotate(0);
      } else if (data.direction === "down") {
        setRotate(180);
      } else if (data.direction === "left") {
        setRotate(-90);
      }
    }
  }, []);
  return (
    <div
      class={styles.container}
      style={{ background: data.direction !== null ? "red" : "black" }}
    >
      {data.direction !== null ? (
        <i
          className="fas fa-chevron-up"
          style={{ transform: "rotate(" + rotate + "deg)" }}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};
export default GridItem;
