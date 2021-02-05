import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Modelo/Libro';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  libro: Libro = new Libro();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id=localStorage.getItem("id");
    this.service.getLibroId(+id)
      .subscribe(data => {
        this.libro = data;
    })
  }

  Actualizar(libro:Libro) {
    this.service.updateLibro(libro)
      .subscribe(data => {
        this.libro = data;
        alert("Se actualizo correctamente");
        this.router.navigate(["listar"])
      })
  }
}
