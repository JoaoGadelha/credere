// moves the space probe one unit forward.
// returns the new position coordinates for the probe.
// parameters:
// direction values: "C", "D", "B" or "E".
// x and y: coordinates for the current space probe position.
const walkProbe = (direction, x, y) => {
  x = parseInt(x, 10);
  y = parseInt(y, 10);
  switch (direction) {
    case "E":
      x -= 1;
      break;
    case "D":
      x += 1;
      break;
    case "C":
      y += 1;
      break;
    case "B":
      y -= 1;
      break;
  }
  return { x: x, y: y };
};

// turns the space probe either to the left or to the right,
// depending on the value of the parameter 'turn'.
// returns the new direction of the probe.
// parameters:
// turn values: "GD" or "GE".
// direction values : "C","D","B" or "E".
const turnProbe = (direction, turn) => {
  switch (turn) {
    case "GE":
      switch (direction) {
        case "C":
          return "E";
        case "D":
          return "C";
        case "B":
          return "D";
        case "E":
          return "B";
      }
      break;
    case "GD":
      switch (direction) {
        case "C":
          return "D";
        case "D":
          return "B";
        case "B":
          return "E";
        case "E":
          return "C";
      }
      break;
  }
};

module.exports = { walkProbe, turnProbe };
