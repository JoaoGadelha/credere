
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
      { _id: "5fde0a8b3d5372c18431b61a" },
      { $set: resetedProbe }
    );

    // fetches new position and sends it back to the frontend
    let resetProbePosition = await Probe.find({
      _id: "5fde0a8b3d5372c18431b61a",
    });
    return res.json(resetProbePosition);
    
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = resetPosition;
