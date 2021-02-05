import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Modelo/Libro';
import { ServiceService } from '../../Service/service.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  libros:Libro[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getLibros()
    .subscribe(data=>{
      this.libros=data;
    })
  }

  Editar(libro:Libro):void{
    localStorage.setItem("id", libro.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(libro:Libro){
    localStorage.deleteLibro(libro)
    .subscribe(data=>{
      this.libros = this.libros.filter(l => l !== libro);
      alert("Libro eliminado con èxito...");
    })
  }

}
