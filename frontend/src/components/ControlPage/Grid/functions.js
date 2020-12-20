// creates the 25 cells in the 5x5 grid
const createGrid = () => {
  let gridArray = [];
  let auxArray = [];
  let nRows = 5;
  let nCols = 5;
  for (let y = 0; y < nCols; y++) {
    for (let x = 0; x < nRows; x++) {
      auxArray.push({ x: x, y: y });
    }
    // unshifts the line created by the previous for loop
    // so that the origin coordinate (0,0) is set at 
    // the bottom left corner of the grid.
    for (let i = nCols - 1; i >= 0; i--) {
      gridArray.unshift(auxArray[i]);
    }
    auxArray = [];
  }
  return gridArray;
};

export { createGrid };
