import React, { useEffect, useState } from "react";
import styles from "./GridItem.module.css";

// renders one cell of the 5x5 grid
const GridItem = ({ item, probeData }) => {
  let [rotate, setRotate] = useState(0);
  // flag that indicates if the probe is present in this cell
  let [renderProbe, setRenderProbe] = useState(false);
  // the snippet of code inside 'useEffect' runs
  // whenever the value of 'probeData' varies and
  // checks if the probe should be rendered here.
  useEffect(() => {
    if (
      parseInt(probeData.x, 10) === item.x &&
      parseInt(probeData.y, 10) === item.y
    ) {
      setRenderProbe(true);
      if (probeData.direction === "D") {
        setRotate(90);
      } else if (probeData.direction === "C") {
        setRotate(0);
      } else if (probeData.direction === "B") {
        setRotate(180);
      } else if (probeData.direction === "E") {
        setRotate(-90);
      }
    } else {
      setRenderProbe(false);
    }
  }, [probeData]);
  return (
    <div
      className={styles.container}
      style={{ background: renderProbe ? "red" : "black" }}
    >
      {renderProbe ? (
        <i
          className="fas fa-chevron-up"
          style={{ transform: "rotate(" + rotate + "deg)" }}
        ></i>
      ) : (
        ""
      )}
      <div className={styles.infoBox}>
        ({item.x},{item.y})
      </div>
    </div>
  );
};
export default GridItem;
