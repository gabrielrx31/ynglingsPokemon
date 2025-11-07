const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3000;

const pokemonRoutes = require('./routes/pokemonRoutes');


mongoose.connect('mongodb://localhost:27017/pokedex')
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Pokémon API!' });
});

app.use('/pokemons', pokemonRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Something broke!' });
});

app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`);
})