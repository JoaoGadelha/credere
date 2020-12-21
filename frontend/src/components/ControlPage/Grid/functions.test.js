import { createGrid } from "./functions";

describe("Tests for the 'createGrid' function", () => {
  it("tests if the number of cells in the 5x5 grid equals 25", () => {
    let grid = createGrid();
    expect(Object.keys(grid).length).toBe(25);
  });

  it("tests if the sequence of cells is correct",()=>{
   // the first element of the generated grid must be {x:0,y:4} and
   // the fifth element must be {x:4, y:4}
   let grid = createGrid();
    expect(grid[0]).toEqual({x:0,y:4});
    expect(grid[4]).toEqual({x:4,y:4});
  })
});
