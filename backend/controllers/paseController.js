const Pase = require('../models/Pase');

exports.getPase = async (req,res) =>{
    try{
        const pase = await Pase.find()
        .populate('cine')
        .populate('pelicula');
        res.json(pase);
    }catch(error){
        console.log(error);
    }
};

exports.postPase = async (req,res) =>{
    try{

        const { cineId, peliculaId, horario } = req.body;

        const pase = new Pase({
            cine: cineId,
            pelicula: peliculaId,
            horario: horario,
        });
        const paseGuardado = await pase.save();

    res.json(paseGuardado);
    }catch(error){
        console.log(error);
    }
}

exports.editPase = async (req, res) =>{
    try{
        
    }catch(error){

    }
}

exports.actualizarPase = async(req,res)=>{

}

exports.eliminarPase = async(req,res)=>{

}