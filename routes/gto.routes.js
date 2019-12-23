module.exports = (app) => {
    const gtos = require('../controllers/gto.controller.js');
    const Gto = require('../models/gto.model.js');
    // Create a new gto
    app.post('/gtos', gtos.create);

    // Retrieve all gtos
    app.get('/gtos', gtos.findAll);
    app.get('/gtos/:title', gtos.findByTitle);

    // Retrieve a single gto with equityId
    app.get('/gtos/:equityId', gtos.findOne);

    // Update a Note with equityId
    app.put('/gtos/:equityId', gtos.update);

    // Delete a Note with equityId
    app.delete('/gtos/:equityId', gtos.delete);
}
