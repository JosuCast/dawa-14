import { Component } from '@angular/core';
import { Pase } from 'src/app/models/modelo';
import { CineService } from 'src/app/services/cine.service';
import { PaseService } from 'src/app/services/pase.service';

@Component({
  selector: 'app-listar-pases',
  templateUrl: './listar-pases.component.html',
  styleUrls: ['./listar-pases.component.css']
})
export class ListarPasesComponent {
  listPases: Pase[] = [];
  elementos: number = 0;
  
  
  constructor(private _paseService: PaseService) {

  }
  
  ngOnInit(): void {
    
    this.obtenerCines();

  }

  obtenerCines(){
    this._paseService.getPase().subscribe(data => {
      console.log(data);
      this.listPases = data;
      this.elementos = this.listPases.length;
    })
  }
  generarPDF(){
    console.log('funciona');
    
    this._paseService.getPDF().subscribe(response => {
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
