import { Component } from '@angular/core';
import { Cine } from 'src/app/models/modelo';
import { CineService } from 'src/app/services/cine.service';

@Component({
  selector: 'app-listar-cines',
  templateUrl: './listar-cines.component.html',
  styleUrls: ['./listar-cines.component.css']
})
export class ListarCinesComponent {
  listCines: Cine[] = [];
  elementos: number = 0;
  
  
  constructor(private _cineService: CineService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerCines();

  }

  obtenerCines(){
    this._cineService.getCine().subscribe(data => {
      console.log(data);
      this.listCines = data;
      this.elementos = this.listCines.length;
    })
  }
  generarPDF(){
    console.log('funciona');
    
    this._cineService.getPDF().subscribe(response => {
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
