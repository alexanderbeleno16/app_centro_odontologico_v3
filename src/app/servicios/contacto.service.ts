import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://127.0.0.1:3000/getAll");
  } 
}
