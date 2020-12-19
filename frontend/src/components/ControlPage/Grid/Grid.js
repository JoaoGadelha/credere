import React, { useEffect, useState } from "react";
import styles from "./Grid.module.css";
import { createGrid } from "./functions";
import GridItem from "./GridItem/GridItem";

const Grid = () => {
  // cria grid com n elementos
  let n = 25;
  let [grid, setGrid] = useState([]);

  useEffect(() => {
      setGrid(createGrid());
  }, []);

  return (
    <div class={styles.container}>
      {grid.length > 0 ? grid.map((item) => <GridItem data={item} />) : ""}
    </div>
  );
};
export default Grid;
