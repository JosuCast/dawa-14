import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cine, Pelicula } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  url = 'http://localhost:4000/api/cine/';
    pdf = 'http://localhost:4000/api/reporte/pasa';
  
    constructor(private http: HttpClient) { 
  
    }
    
    getPDF(): Observable<any> {
      return this.http.get(this.pdf, { responseType: 'blob' })
    }
  
    getCine(): Observable<any> {
      return this.http.get(this.url);
    }
  
    deleteCine(id: string): Observable<any> {
      return this.http.delete(this.url + id);
    }
  
    guardarCine(cine: Cine): Observable<any> {
      return this.http.post(this.url, cine);
    }
  
    viewCine(id?: string): Observable<any> {
      return this.http.get(this.url + id)
    }
  
    actualizarCine(id: string, cine: Cine): Observable<any> {
      return this.http.put(this.url + id, cine);
    }
  
}
