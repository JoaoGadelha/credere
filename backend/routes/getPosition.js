// retorna a posicao da sonda

let express = require('express');
let getPosition = express.Router();
let Probe = require('../probeSchema.js');

getPosition.get('/', async (req, res) => {

    try {
        let fetchProbeInfo = await Probe.find({_id:'5fde0a8b3d5372c18431b61a'});
        return res.json(fetchProbeInfo);

    } catch (err) {
        return res.json({ message: err });
    }
})

module.exports = getPosition;