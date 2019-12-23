const Gto = require('../models/gto.model.js');

//Create new Gto
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Gto content can not be empty"
        });
    }

    // Create a Gto
    const gto = new Gto({
        title: req.body.title || "No gto title",
        heroHand1: req.body.heroHand1,
        heroHand2: req.body.heroHand2,
        vilainRange: req.body.vilainRange,
        vilainRange_percent: req.body.vilainRange_percent,
        type: req.body.type,
        position: req.body.position,
        flop1: req.body.flop1,
        flop2: req.body.flop2,
        flop3: req.body.flop3,
        check: req.body.check,
        checkCall: req.body.checkCall,
        checkFold: req.body.checkFold,
        bet: req.body.bet,
        gtoUrl: req.body.gtoUrl,
        publish: req.body.publish,
    });

    // Save Gto in the database
    gto.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the gto."
        });
    });
};

// Retrieve all Gtos from the database.
exports.findAll = (req, res) => {
    Gto.find()
    .then(equitys => {
        res.send(equitys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving equitys."
        });
    });
};

// Find a single gto with a equityID
exports.findOne = (req, res) => {
    Gto.findById(req.params.equityId)
    .then(gto => {
        if(!gto) {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        res.send(gto);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving gto with id " + req.params.equityId
        });
    });
};

exports.findByTitle = (req, res) => {
    Gto.find({title: req.params.title})
    .then(gto => {
        if(!gto) {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.title
            });
        }
        res.send(gto);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.title
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving gto with id " + req.params.title
        });
    });
};
// Update a gto
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Gto content can not be empty"
        });
    }

    // Find and update gto with the request body
    Gto.findByIdAndUpdate(req.params.equityId, {
      title: req.body.title || "No gto title",
      heroHand1: req.body.heroHand1,
      heroHand2: req.body.heroHand2,
      vilainRange: req.body.vilainRange,
      vilainRange_percent: req.body.vilainRange_percent,
      type: req.body.type,
      position: req.body.position,
      flop1: req.body.flop1,
      flop2: req.body.flop2,
      flop3: req.body.flop3,
      check: req.body.check,
      checkCall: req.body.checkCall,
      checkFold: req.body.checkFold,
      bet: req.body.bet,
      gtoUrl: req.body.gtoUrl,
      publish: req.body.publish,
    }, {new: true})
    .then(gto => {
        if(!gto) {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        res.send(gto);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating gto with id " + req.params.equityId
        });
    });
};

// Delete a note with the specified equityId in the request
exports.delete = (req, res) => {
    Gto.findByIdAndRemove(req.params.equityId)
    .then(gto => {
        if(!gto) {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        res.send({message: "Gto deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Gto not found with id " + req.params.equityId
            });
        }
        return res.status(500).send({
            message: "Could not delete gto with id " + req.params.equityId
        });
    });
};
