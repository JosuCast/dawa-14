const Cine = require('../models/Cine');

exports.getCine = async(req,res)=>{
    try{
        const cine = await Cine.find(); 
        console.log(cine);
        res.json(cine);
    }catch(error){ 
        console.log(error);
    }
}

exports.postCine = async(req,res) =>{
    try{
        const cine = new Cine(req.body);

        await cine.save();
        res.send(cine);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.editCine = async(req,res) =>{
    try{

        

        let cines = await Cine.findById(req.params.id);

        if(!cines){
            res.status(404).json({ msg: 'No existe el producto'});
        }

        res.json(cines);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarCine = async (req, res) => {

    try {

        const {nombre, direccion, telefono, diaEspectador, diaJubilado, festivos, carnetEstudiante } = new Cine(req.body);
        let cines = await Cine.findById(req.params.id);

        if(!cines){
            res.status(404).json({ msg: 'No existe el producto'});
        }
        cines.nombre = nombre;
        cines.direccion = direccion;
        cines.telefono = telefono;
        cines.precios.diaEspectador = diaEspectador;
        cines.precios.diaJubilado = diaJubilado;
        cines.precios.festivos = festivos;
        cines.precios.carnetEstudiante = carnetEstudiante;

        console.log(cines)

        cines = await Cine.findOneAndUpdate({ _id: req.params.id }, cines, { new: true } );
        res.json(cines);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarCine = async(req, res)=>{
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