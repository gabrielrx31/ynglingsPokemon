const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    level: Number
});

module.exports = mongoose.model('Pokemon', pokemonSchema);