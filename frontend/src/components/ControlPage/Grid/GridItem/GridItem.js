import React, { useEffect, useState } from "react";
import styles from "./GridItem.module.css";

const GridItem = ({ item, probeData }) => {
  let [rotate, setRotate] = useState(0);
  useEffect(() => {
    if (item.direction !== null) {
      if (item.direction === "right") {
        setRotate(90);
      } else if (item.direction === "up") {
        setRotate(0);
      } else if (item.direction === "down") {
        setRotate(180);
      } else if (item.direction === "left") {
        setRotate(-90);
      }
    }
  }, []);
  return (
    <div
      class={styles.container}
      style={{ background: item.direction !== null ? "red" : "black" }}
    >
      {item.direction !== null ? (
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
