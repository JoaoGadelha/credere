import React, { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import { createGrid } from "./functions";
import GridItem from "./GridItem/GridItem";

const Grid = ({ probeData }) => {
  // creates a 5x5 grid
  let n = 25;
  let [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(createGrid());
  }, []);

  return (
    <div class={styles.container}>
      {grid.length > 0
        ? grid.map((item) => <GridItem item={item} probeData={probeData} />)
        : ""}
    </div>
  );
};
export default Grid;
