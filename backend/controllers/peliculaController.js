const Pelicula = require('../models/Pelicula');

exports.getPelicula = async (req,res) =>{
    try{
        const pelicula = await Pelicula.find();
        res.json(pelicula);
    }catch(error){
        console.log(error);
    }
};

exports.postPelicula = async (req,res) =>{
    try{
        const pelicula = new Pelicula(req.body);
        
        await pelicula.save();
        res.send(pelicula);
    }catch(error){
        console.log(error);
    }
}