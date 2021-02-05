import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Libro } from "../Modelo/Libro";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='https://localhost:8080/ejemplo01/libros';

  getLibros(){
		return this.http.get<Libro[]>(this.Url);
  }

  createLibro(libro:Libro) {
    return this.http.post<Libro[]>(this.Url, libro);
  }

  getLibroId(id:number) {
    return this.http.get<Libro>(this.Url + "/" + id);
  }
  updateLibro(libro:Libro) {
    return this.http.put<Libro>(this.Url + "/" +libro.id,libro);
  }
  deleteLibro(libro:Libro) {
    return this.http.delete<Libro>(this.Url + "/" +libro.id);
  }
}
