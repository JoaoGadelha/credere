let express = require("express");
let resetPosition = express.Router();
let Probe = require("../probeSchema.js");

// resets the position of the space probe and sets
// its direction to 'D'
resetPosition.post("/", async (req, res) => {
  try {
    let resetedProbe = {
      x: 0,
      y: 0,
      direction: "D",
    };

    // resets position
    await Probe.updateOne(
      { _id: "5fe25d481001a45f43d80979" },
      { $set: resetedProbe }
    );

    // fetches new position and sends it back to the frontend
    let resetProbePosition = await Probe.find({
      _id: "5fe25d481001a45f43d80979",
    });
    return res.json({
      x: resetProbePosition[0].x,
      y: resetProbePosition[0].y,
      direction: resetProbePosition[0].direction,
    });
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = resetPosition;
