import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = "http://127.0.0.1:3000/";


  constructor(private http: HttpClient) { }

  retornarPas() {
    return this.http.get(`${this.url}getAll/paciente`);
  } 

  insertaPac(datos:any):Observable<any> {
    return this.http.post(`${this.url}add_registro/paciente`, datos);
  } 
 
  eliminarPac(id:number) {
    return this.http.delete(`${this.url}delate_contact/paciente/`+id);
  } 
  
  updatePac(id:number, datos_nuevos:any) {
    return this.http.put(`${this.url}update_contact/paciente/`+id, datos_nuevos);
  } 


}
