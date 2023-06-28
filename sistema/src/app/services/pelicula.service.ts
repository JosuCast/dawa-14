import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
    url = 'http://localhost:4000/api/pelicula/';
    pdf = 'http://localhost:4000/api/reporte/pasa';
  
    constructor(private http: HttpClient) { 
  
    }
    
    getPDF(): Observable<any> {
      return this.http.get(this.pdf, { responseType: 'blob' })
    }
  
    getPelicula(): Observable<any> {
      return this.http.get(this.url);
    }
  
    deletePelicula(id: string): Observable<any> {
      return this.http.delete(this.url + id);
    }
  
    guardarPelicula(pelicula: Pelicula): Observable<any> {
      return this.http.post(this.url, pelicula);
    }
  
    viewPelicula(id?: string): Observable<any> {
      return this.http.get(this.url + id)
    }
  
    actualizarPelicula(id: string, pelicula: Pelicula): Observable<any> {
      return this.http.put(this.url + id, pelicula);
    }
  
  
  }
  