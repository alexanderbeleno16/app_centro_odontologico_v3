import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  url = "http://127.0.0.1:3000/";
  constructor(private http: HttpClient) { }

  retornarCon() {
    return this.http.get(`${this.url}getAll/consulta`);
  } 

  insertaCon(datos:any):Observable<any> {
    return this.http.post(`${this.url}add_registro/consulta`, datos);
  } 
 
  eliminarCon(id:number) {
    return this.http.delete(`${this.url}delate_contact/consulta/`+id);
  } 
  
  updateCon(id:number, datos_nuevos:any) {
    return this.http.put(`${this.url}update_contact/consulta/`+id, datos_nuevos);
  } 
}
