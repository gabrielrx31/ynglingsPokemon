const pokemon = require('../models/pokemonModel');

exports.createPokemon = async(req, res) => {
    try {
        const data = req.body;
        const createdPokemon = await new pokemon(data).save();
        res.json(createdPokemon);
    } catch (err) {
        res.status(500).json({ message: 'Error creating new pokemon', error: err.message });
    }
};

exports.getAllPokemons = async(req, res) => {
    try {
        const pokemons = await pokemon.find({});
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ message: 'Error getting all pokemons', error: err.message });
    }
};