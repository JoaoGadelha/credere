let express = require("express");
let getPosition = express.Router();
let Probe = require("../probeSchema.js");

// returns the position of the space probe
getPosition.get("/", async (req, res) => {
  try {
    let fetchProbeInfo = await Probe.find({ _id: "5fe25d481001a45f43d80979" });
    return res.json({
      x: fetchProbeInfo[0].x,
      y: fetchProbeInfo[0].y,
      direction: fetchProbeInfo[0].direction,
    });
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = getPosition;
