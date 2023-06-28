import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/modelo';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit{

  listProductos: Pelicula[] = [];
  elementos: number = 0;
  
  
  constructor(private _productoService: PeliculaService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerProductos();

  }

  obtenerProductos(){
    this._productoService.getPelicula().subscribe(data => {
      console.log(data);
      this.listProductos = data;
      this.elementos = this.listProductos.length;
    })
  }
  generarPDF(){
    console.log('funciona');
    
    this._productoService.getPDF().subscribe(response => {
      const file = new Blob([response], { type: 'application/pdf' });

      const url = URL.createObjectURL(file);
      window.open(url)

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Lab13.pdf';

      document.body.appendChild(a);
      a.click();

      URL.revokeObjectURL(url);
      document.body.removeChild(a);

    },)
    
  }

}
