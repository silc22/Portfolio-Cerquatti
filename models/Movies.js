const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
})

const Movies = mongoose.model('movies', movieSchema)

module.exports = Movies;