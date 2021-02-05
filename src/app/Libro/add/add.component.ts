import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Modelo/Libro';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  libros:Libro[];
 
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(libro:Libro) {
    this.service.createLibro(libro)
      .subscribe(data => {
        alert("Se agrego con èxito...!!");
        this.router.navigate(["listar"]);
    })
  }

}
