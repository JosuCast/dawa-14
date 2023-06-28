const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/db');
const config = require('./config/global');
const app = express();

db();

app.use(cors());
app.use(express.json());
app.use('/api/cine',require('./routes/cine'));
app.use('/api/pase', require('./routes/pase'));
app.use('/api/pelicula',require('./routes/pelicula'));
app.use('/api/usuario', require('./routes/usuario')); 
app.use('/api/reporte',  require('./routes/reporte'));

app.listen(config.port, ()=>{
    console.log("El servidor corriendo en el puerto 4000");
})
