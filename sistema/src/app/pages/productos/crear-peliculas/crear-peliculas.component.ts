import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/modelo';

import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-peliculas',
  templateUrl: './crear-peliculas.component.html',
  styleUrls: ['./crear-peliculas.component.css']
})
export class CrearPeliculasComponent {
  peliculaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _peliculaservice: PeliculaService){
    this.peliculaForm = this.fb.group({
        titulo:  ['', Validators.required],
        director: ['', Validators.required],
        protagonistas: ['', Validators.required],
        genero:    ['', Validators.required],
        clasificacion:    ['', Validators.required]
    })
  }

  agregarPelicula(){

    const PELICULA: Pelicula = {
      titulo: this.peliculaForm.get('titulo')?.value,
      director: this.peliculaForm.get('director')?.value,
      protagonistas: this.peliculaForm.get('protagonistas')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      clasificacion: this.peliculaForm.get('clasificacion')?.value
    }

    console.log(PELICULA)

    Swal.fire({
      title: 'Añadir Película',
      text: "¿Desea añadir la película?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this._peliculaservice.guardarPelicula(PELICULA).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-peliculas'])
        }) 
      }
    })

    
  }

}
