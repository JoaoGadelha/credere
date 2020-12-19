const createGrid = () => {
  let gridArray = [];
  let auxArray = [];
  let nRows = 5;
  let nCols = 5;
  for (let x = 0; x < nRows; x++) {
    for (let y = 0; y < nCols; y++) {
      // direction representa a direcao em que a sonda esta posicionada.
      // pode receber 'up', 'down','left','right' se a sonda estiver na celula,
      // senao recebe null.
      if (x === 0 && y === 0) {
        auxArray.push({ x: x, y: y, direction: "right" });
      } else {
        auxArray.push({ x: x, y: y, direction: null });
      }
    }
    for (let i = nCols - 1; i >= 0; i--) {
      gridArray.unshift(auxArray[i]);
    }
    auxArray = [];
  }
  return gridArray;
};

export { createGrid };
