let functions = require("./functions");
let walkProbe = functions.walkProbe;
let rotateProbe = functions.rotateProbe;
let NLtransform = functions.NLtransform;

describe("tests for the 'walkProbe' function", () => {
  it("tests if the probe walks correctly starting from (2,2) and facing the 'D' direction", async () => {
    let direction = "D";
    let x = 2;
    let y = 2;
    let response = walkProbe(direction, x, y);
    expect(response).toEqual({ x: 3, y: 2 });
  });

  it("tests if the probe walks correctly starting from (2,2) and facing the 'E' direction", async () => {
    let direction = "E";
    let x = 2;
    let y = 2;
    let response = walkProbe(direction, x, y);
    expect(response).toEqual({ x: 1, y: 2 });
  });

  it("tests if the probe walks correctly starting from (2,2) and facing the 'C' direction", async () => {
    let direction = "C";
    let x = 2;
    let y = 2;
    let response = walkProbe(direction, x, y);
    expect(response).toEqual({ x: 2, y: 3 });
  });

  it("tests if the probe walks correctly starting from (2,2) and facing the 'B' direction", async () => {
    let direction = "B";
    let x = 2;
    let y = 2;
    let response = walkProbe(direction, x, y);
    expect(response).toEqual({ x: 2, y: 1 });
  });
});

describe("tests for the 'rotateProbe' function", () => {
  it("starts the probe at the 'D' direction and rotates to the 'GE' direction", () => {
    let direction = "D";
    let rotateDirection = "GE";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("C");
  });

  it("starts the probe at the 'D' direction and rotates to the 'GD' direction", () => {
    let direction = "D";
    let rotateDirection = "GD";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("B");
  });

  it("starts the probe at the 'C' direction and rotates to the 'GE' direction", () => {
    let direction = "C";
    let rotateDirection = "GE";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("E");
  });

  it("starts the probe at the 'C' direction and rotates to the 'GD' direction", () => {
    let direction = "C";
    let rotateDirection = "GD";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("D");
  });

  it("starts the probe at the 'B' direction and rotates to the 'GE' direction", () => {
    let direction = "B";
    let rotateDirection = "GE";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("D");
  });

  it("starts the probe at the 'B' direction and rotates to the 'GD' direction", () => {
    let direction = "B";
    let rotateDirection = "GD";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("E");
  });

  it("starts the probe at the 'E' direction and rotates to the 'GE' direction", () => {
    let direction = "E";
    let rotateDirection = "GE";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("B");
  });

  it("starts the probe at the 'E' direction and rotates to the 'GD' direction", () => {
    let direction = "E";
    let rotateDirection = "GD";
    let response = rotateProbe(direction, rotateDirection);
    expect(response).toBe("C");
  });
});

describe("tests for the 'NLtransform' function", () => {
  it("tests for a sequence of movements", () => {
    let movements = ["M", "M", "GE", "M", "M", "GD", "M", "M", "GE", "GD"];
    let direction = "D";
    let response = NLtransform(movements, direction);
    let expectedResponse =
      "The probe moved 2 cells in the x-axis, turned to the left, moved 2 cells in the y-axis, turned to the right, moved 2 cells in the x-axis, turned to the left and turned to the right.";
    expect(response).toBe(expectedResponse);
  });
});
