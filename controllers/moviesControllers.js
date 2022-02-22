const Movies = require('../models/Movies')


const moviesControllers = {

    getMovies: async(req,res)=>{
        let movies
        let error = null
        try{
            movies = await Movies.find()
        }catch(error){
            error = error
            console.error(error)
        }      
        res.json({
            response: error ? 'ERROR' : movies, 
            success: error ? false : true,
            error: error
        })
    },

    addMovies: (req, res) => {
        const {name, image} = req.body
        new Movies({name, image}).save()
        .then((response) => res.json({response}))
    },

    getMovie: async(req,res)=>{  
        let movies
        const id = req.params.id        
        try{
            movies = await Movies.findOne({_id:id})
        }catch(error){
            console.log(error)
        }
        res.json({respuesta: movies, success:true})
    },

    deleteMovie: async(req,res)=>{
        let movies
        const id = req.params.id
        try {
            movies = await Movies.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: movies})
    },


    modifyMovie: async(req,res)=>{
        let id = req.params.id
        let movies = req.body
        let actualizado
        try{
            actualizado = await Movies.findOneAndUpdate({_id:id},movies,{new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}

module.exports = moviesControllers;