// retorna a posicao da sonda

let express = require("express");
let moveProbe = express.Router();
let Probe = require("../probeSchema.js");

moveProbe.post("/", async (req, res) => {
  try {
    let resetedProbe = {
      x: 0,
      y: 0,
      direction: "D",
    };

    // instructions for probe movement
    let deltaX = req.body.Dx;
    let deltaY = req.body.Dy;
    let direction = req.body.direction;

    // fetches the probe position from the database
    let probePosition = await Probe.find({
      _id: "5fde0a8b3d5372c18431b61a",
    });

    // calculates the new probe data
    let updatedProbeData = {
      x: parseInt(probePosition[0].x, 10) + deltaX,
      y: parseInt(probePosition[0].y, 10) + deltaY,
      direction: direction,
    };

    // updates probe data in the database
    await Probe.updateOne(
      { _id: "5fde0a8b3d5372c18431b61a" },
      { $set: updatedProbeData }
    );

    // fetches new probe data and sends it back to the frontend
    let receiveNewProbeData = await Probe.find({
      _id: "5fde0a8b3d5372c18431b61a",
    });
    return res.json({
      x: receiveNewProbeData[0].x,
      y: receiveNewProbeData[0].y,
      direction: receiveNewProbeData[0].direction,
    });
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = moveProbe;
