const Movies = require('../models/Movies')


const moviesControllers = {

    getStuff: async(req,res)=>{
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

    addOne: (req, res) => {
        const {name, image, category} = req.body
        new Movies({name, image, category}).save()
        .then((response) => res.json({response}))
    },

    getOne: async(req,res)=>{  
        let movies
        const id = req.params.id        
        try{
            movies = await Movies.findOne({_id:id})
        }catch(error){
            console.log(error)
        }
        res.json({response: movies, success:true})
    },

    deleteOne: async(req,res)=>{
        let movies
        const id = req.params.id
        try {
            movies = await Movies.findOneAndDelete({ _id: id })
        } catch(error) {
            console.log(error)
        }
        res.json({response: movies})
    },


    modifyOne: async(req,res)=>{
        let id = req.params.id
        let movies = req.body
        let actualizado
        try{
            actualizado = await Movies.findOneAndUpdate({_id : id}, movies ,{ new : true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}

module.exports = moviesControllers;