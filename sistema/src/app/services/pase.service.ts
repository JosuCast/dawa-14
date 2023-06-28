import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pase } from '../models/modelo';

@Injectable({
  providedIn: 'root'
})
export class PaseService {

  url = 'http://localhost:4000/api/pase/';
  pdf = 'http://localhost:4000/api/reporte/pasa';

  constructor(private http: HttpClient) { 

  }
  
  getPDF(): Observable<any> {
    return this.http.get(this.pdf, { responseType: 'blob' })
  }

  getPase(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePase(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPase(pase: Pase): Observable<any> {
    return this.http.post(this.url, pase);
  }

  viewPase(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarPase(id: string, pase: Pase): Observable<any> {
    return this.http.put(this.url + id, pase);
  }
}
