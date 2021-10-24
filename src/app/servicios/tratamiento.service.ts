import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  url = "http://127.0.0.1:3000/";

  constructor(private http: HttpClient) { }
  retornarTra() {
    return this.http.get(`${this.url}getAll/tratamiento`);
  } 

  insertaTra(datos:any):Observable<any> {
    return this.http.post(`${this.url}add_registro/tratamiento`, datos);
  } 
 
  eliminarTra(id:number) {
    return this.http.delete(`${this.url}delate_contact/tratamiento/`+id);
  } 
  
  updateTra(id:number, datos_nuevos:any) {
    return this.http.put(`${this.url}update_contact/tratamiento/`+id, datos_nuevos);
  } 
}
