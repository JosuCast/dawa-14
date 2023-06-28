import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { ListarPeliculasComponent } from './pages/productos/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './pages/productos/crear-peliculas/crear-peliculas.component';
import { ListarCinesComponent } from './pages/cines/listar-cines/listar-cines.component';
import { CrearCinesComponent } from './pages/cines/crear-cines/crear-cines.component';
import { ListarPasesComponent } from './pages/pases/listar-pases/listar-pases.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'crear-peliculas', component: CrearPeliculasComponent },
  {path: 'listar-peliculas', component: ListarPeliculasComponent},
  {path: 'listar-cines', component: ListarCinesComponent},
  {path: 'listar-pases', component:ListarPasesComponent},
  {path: 'crear-peliculas', component: CrearCinesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
