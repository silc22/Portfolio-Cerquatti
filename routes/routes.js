const Router = require('express').Router()
const moviesControllers = require('../controllers/moviesControllers')

const {getStuff, addOne, getOne, deleteOne, modifyOne} = moviesControllers

Router.route('/stuff')
.get(getStuff)
.post(addOne)

Router.route('/stuff/:id')
.get(getOne)
.delete(deleteOne)
.put(modifyOne)

module.exports = Router