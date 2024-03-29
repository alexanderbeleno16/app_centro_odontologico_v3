import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdontologoService {
  url = "http://127.0.0.1:3000/";

  constructor(private http: HttpClient) { }
  
  retornarOdo() {
    return this.http.get(`${this.url}getAll/odontologo`);
  } 

  insertaOdo(datos:any):Observable<any> {
    return this.http.post(`${this.url}add_registro/odontologo`, datos);
  } 
 
  eliminarOdo(id:number) {
    return this.http.delete(`${this.url}delate_contact/odontologo/`+id);
  } 
  
  updateOdo(id:number, datos_nuevos:any) {
    return this.http.put(`${this.url}update_contact/odontologo/`+id, datos_nuevos);
  } 
}
