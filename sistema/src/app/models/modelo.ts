export interface Cine {
    precios: {
      diaEspectador: number;
      diaJubilado: number;
      festivos: number;
      carnetEstudiante: number;
    };
    _id?: string;
    nombre: string;
    direccion: string;
    telefono: string;
  }
  
  export interface Pelicula {
    _id?: string;
    titulo: string;
    director: string;
    protagonistas: string[];
    genero: string;
    clasificacion: string;
  }
  
  export interface Pase {
    _id?: string;
    cine: Cine;
    pelicula: Pelicula;
  }
  
  