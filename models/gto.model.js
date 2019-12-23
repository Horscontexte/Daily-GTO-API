const mongoose = require('mongoose');

const GtoSchema = mongoose.Schema({
    title: String,
    heroHand1: String,
    heroHand2: String,
    vilainRange: String,
    vilainRange_percent: String,
    type: String,
    position: String,
    flop1: String,
    flop2: String,
    flop3: String,
    checkFold: String,
    checkCall: String,
    check: String,
    bet: String,
    gtoUrl: String,
    publish: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Gtos', GtoSchema);
