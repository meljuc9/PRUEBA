import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Libro/add/add.component';
import { EditarComponent } from './Libro/editar/editar.component';
import { ListarComponent } from './Libro/listar/listar.component';

const routes: Routes = [
  {path: "list", component: ListarComponent},
  {path: "add", component: AddComponent},
  {path: "edit", component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
