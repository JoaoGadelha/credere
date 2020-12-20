let express = require("express");
let moveProbe = express.Router();
let Probe = require("../probeSchema.js");
let functions = require("../functions");
let walkProbe = functions.walkProbe;
let turnProbe = functions.turnProbe;
let NLtransform = functions.NLtransform;

// performs movements on the space probe
moveProbe.post("/", async (req, res) => {
  try {
    // instructions for probe movement
    let movements = req.body.movements;

    // fetches the probe position from the database
    let probePosition = await Probe.find({
      _id: "5fde0a8b3d5372c18431b61a",
    });
    let x = probePosition[0].x;
    let y = probePosition[0].y;
    let direction = probePosition[0].direction;

    // transforms the movements to natural language instructions
    // for example, transforms the sequence ['M', 'M', 'M', 'GD'] to
    // 'the probe moved three cells in the y-axis and then turned right'.
    let NLinstructions = NLtransform(movements, direction);

    // performs the probe movements
    movements.forEach((item) => {
      switch (item) {
        case "M":
          let newPosition = walkProbe(direction, x, y);
          x = newPosition.x;
          y = newPosition.y;
          break;
        case "GE":
          direction = turnProbe(direction, "GE");
          break;
        case "GD":
          direction = turnProbe(direction, "GD");
          break;
      }
    });

    // verifies if the new position exceeds the grid bounds
    // (the grid is a 5x5 matrix)
    if (x > 4 || y > 4 || x < 0 || y < 0) {
      return res.send({
        error: "The inputed sequence moves the probe outside of the grid.",
      });
    }

    // updates probe data in the database
    let updatedProbeData = { x: x, y: y, direction: direction };
    await Probe.updateOne(
      { _id: "5fde0a8b3d5372c18431b61a" },
      { $set: updatedProbeData }
    );

    // fetches the new updated probe position and direction
    // from the database and sends it back to the frontend
    let receiveNewProbeData = await Probe.find({
      _id: "5fde0a8b3d5372c18431b61a",
    });
    return res.json({
      NLinstructions: NLinstructions,
      x: receiveNewProbeData[0].x,
      y: receiveNewProbeData[0].y,
      direction: receiveNewProbeData[0].direction,
    });
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = moveProbe;
