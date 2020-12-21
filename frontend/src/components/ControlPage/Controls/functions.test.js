import { turnProbe, moveForward, postData } from "./functions";

describe("Test for the 'turnProbe' function", () => {
  it("tests if the function produces the correct arrays 'NLmovements' and 'instructions'", () => {
    let turnDirection = "GD";
    let NLmovements = ["Move forward."];
    let instructions = ["GD", "M", "M"];
    // mock functions
    let setNLmovements = jest.fn();
    let setInstructions = jest.fn();

    let response = turnProbe(
      turnDirection,
      NLmovements,
      setNLmovements,
      instructions,
      setInstructions
    );

    expect(response.NLmovements).toEqual([
      "Move forward.",
      "Turn probe to the right.",
    ]);
    expect(response.instructions).toEqual(["GD", "M", "M", "GD"]);
  });
});

describe("Test for the 'moveForward' function", () => {
  it("tests if the function produces the correct arrays 'NLmovements' and 'instructions'", () => {
    let NLmovements = ["Move forward."];
    let instructions = ["GD", "M", "M"];
    // mock functions
    let setNLmovements = jest.fn();
    let setInstructions = jest.fn();

    let response = moveForward(
      NLmovements,
      setNLmovements,
      instructions,
      setInstructions
    );

    expect(response.NLmovements).toEqual(["Move forward.", "Move forward."]);
    expect(response.instructions).toEqual(["GD", "M", "M", "M"]);
  });
});

describe("Test for the 'postData' function", () => {
  it("tests if the function returns an object with keys 'x','y' and 'direction'", async () => {
    let url = "https://credere-backend.herokuapp.com/resetPosition";
    let data = {};
    let response = await postData(url, data);
    console.log(response);
    let responseKeys = Object.keys(response);
    expect(responseKeys.includes("x")).toBe(true);
    expect(responseKeys.includes("y")).toBe(true);
    expect(responseKeys.includes("direction")).toBe(true);
  });
});
