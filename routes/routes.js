const Router = require('express').Router()
const moviesControllers = require('../controllers/moviesControllers')

const {getMovies, addMovies, getMovie, deleteMovie, modifyMovie} = moviesControllers

Router.route('/movies')
.get(getMovies)
.post(addMovies)

Router.route('/movies/:id')
.get(getMovie)
.delete(deleteMovie)
.put(modifyMovie)

module.exports = Router