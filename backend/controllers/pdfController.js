const Pase = require("../models/Pase");
const { jsPDF } = require("jspdf");
require("jspdf-autotable");

exports.generarPDf = async (req, res) => {
  try {
    const pase = await Pase.find().populate("cine").populate("pelicula");
    const nombreArchivo = "InformeProyecciones.pdf";
    const doc = new jsPDF();

    // Tabla de productos
    doc.setFontSize(15);
    doc.autoTable({
      theme: "grid",
      startY: 10,
      head: [
        [
          "Cine",
          "Direccion",
          "Telefono",
          "Precio",
          "Pelicula",
          "Genero",
          "Clasificacion",
          "Horario",
        ],
      ],
      body: pase.map((pases) => [
        pases.cine.nombre,
        pases.cine.direccion,
        pases.cine.telefono,
        `Precio espectador: S/ ${pases.cine.precios.diaEspectador}\n Precio Jubilado: S/ ${pases.cine.precios.diaJubilado}\n Precio festivo: S/ ${pases.cine.precios.festivos} \n Precio estudiante: S/ ${pases.cine.precios.carnetEstudiante} `,
        pases.pelicula.titulo,
        pases.pelicula.genero,
        pases.pelicula.clasificacion,
        pases.horario,
      ]),
    });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${nombreArchivo}"`
    );
    res.setHeader("Content-Type", "application/pdf");
    res.contentType("application/pdf");
    res.send(Buffer.from(doc.output("arraybuffer")));
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
