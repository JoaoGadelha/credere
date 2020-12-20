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

// transforms the movements to natural language instructions
// for example, transforms the sequence ['M', 'M', 'M', 'GD'] to
// 'the probe moved three cells in the y-axis and then turned right'.
const NLtransform = (movements, direction) => {
  let message = "The probe ";
  let countM = 0;
  let axis = "x";
  let plural = "";

  movements.forEach((item, i) => {
    switch (item) {
      case "M":
        countM++;
        break;
      case "GD":
        message = message.concat("turned to the right");
        if (direction === "C" || direction === "B") {
          axis = "x";
        } else {
          axis = "y";
        }
        direction = turnProbe(direction, "GD");
        break;
      case "GE":
        message = message.concat("turned to the left");
        if (direction === "C" || direction === "B") {
          axis = "x";
        } else {
          axis = "y";
        }
        direction = turnProbe(direction, "GE");
        break;
    }
    // creates the message for the "M" cases
    if (movements[i + 1] !== "M") {
      if (countM > 1) {
        plural = "s";
      } else {
        plural = "";
      }
      if (countM > 0) {
        message = message.concat(
          "moved " + countM + " cell" + plural + " in the " + axis + "-axis"
        );
      }
      countM = 0;
    }
    console.log(movements[i + 1]);
    if (movements[i + 1] === undefined) {
      message = message.concat(".");
    } else {
      if (message[message.length-2] !== ",") {
        message = message.concat(", ");
      }
    }
  });
  return message;
};

module.exports = { walkProbe, turnProbe, NLtransform };
