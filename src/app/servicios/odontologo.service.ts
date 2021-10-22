import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OdontologoService {

  constructor(private http: HttpClient) { }

  retornarOdo() {
    return this.http.get("http://127.0.0.1:3000/getAll/odontologo");
  }
}
