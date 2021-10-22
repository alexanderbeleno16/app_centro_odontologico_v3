import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  retornarTra() {
    return this.http.get("http://127.0.0.1:3000/getAll/tratamiento");
  }
}
