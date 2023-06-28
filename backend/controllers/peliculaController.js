const Pelicula = require('../models/Pelicula');
const verifyToken = require('../config/verifyToken');


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


        const {titulo, director,protagonistas, genero,clasificacion} = req.body;

        var prota = protagonistas.split(",");

        var protagonistasArray = [];

        prota.forEach(function(elemento){
            protagonistasArray.push(elemento);
        })

        Pelicula.create({
            titulo: titulo,
            director: director,
            protagonistas: protagonistasArray,
            genero: genero,
            clasificacion: clasificacion,
        }).then((pelicula) => {
            console.log("Registro creado exitosamente:", pelicula.toJSON());
            res.json("Registro creado exitosamente");
          })
        
    }catch(error){
        console.log(error);
    }
}

exports.editPelicula = async (req, res) =>{
    try{

        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        res.json(peliculas);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPelicula = async(req,res)=>{
    try {

        const { titulo, director, protagonistas, genero, clasificacion } = new Pelicula(req.body);
        let peliculas = await Pelicula.findById(req.params.id);

        if(!peliculas){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        var prota = protagonistas.split(",");

        var protagonistasArray = [];

        prota.forEach(function(elemento){
            protagonistasArray.push(elemento);
        })

        peliculas.titulo = titulo;
        peliculas.director = director;
        peliculas.protagonistas = protagonistasArray;
        peliculas.genero = genero;
        peliculas.clasificacion = clasificacion;

        peliculas = await Cine.findOneAndUpdate({ _id: req.params.id }, peliculas, { new: true } );
        res.json(peliculas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarPelicula = async(req,res)=>{
    try{
        
        let cines = await Cine.findById(req.params.id);
        
        if(!cines){
            res.status(404).json({ msg: 'No existe el cine'});
        }

        cines = await Cine.findByIdAndRemove(req.params.id);

        res.json({ msg: 'El cine: ' + cines.nombre + ' se ha eliminado' });

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}