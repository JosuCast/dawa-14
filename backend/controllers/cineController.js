const Cine = require('../models/Cine');

exports.getCine = async(req,res)=>{
    try{
        const cine = await Cine.find(); // Ejecuta la consulta y obtiene los resultados
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