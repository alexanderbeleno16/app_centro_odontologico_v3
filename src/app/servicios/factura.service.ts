import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url = "http://127.0.0.1:3000/"; 
  constructor(private http: HttpClient) { }

  retornarFac() {
    return this.http.get(`${this.url}getAll/factura`);
  } 

  insertaFac(datos:any):Observable<any> {
    return this.http.post(`${this.url}add_registro/factura`, datos);
  } 
 
  eliminarFac(id:number) {
    return this.http.delete(`${this.url}delate_contact/factura/`+id);
  } 
  
  updateFac(id:number, datos_nuevos:any) {
    return this.http.put(`${this.url}update_contact/factura/`+id, datos_nuevos);
  } 
}
