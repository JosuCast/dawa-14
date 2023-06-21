import { Component, OnInit } from '@angular/core';
import { Cine } from 'src/app/models/modelo';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit{
  
  listProductos: Cine[] = [];
  elementos: number = 0;
  
  
  constructor(private _productoService: ProductoService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerProductos();

  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
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
