import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListarPeliculasComponent } from './pages/productos/listar-peliculas/listar-peliculas.component';
import { CrearPeliculasComponent } from './pages/productos/crear-peliculas/crear-peliculas.component';
import { ListarCinesComponent } from './pages/cines/listar-cines/listar-cines.component';
import { ListarPasesComponent } from './pages/pases/listar-pases/listar-pases.component';
import { CrearCinesComponent } from './pages/cines/crear-cines/crear-cines.component';
import { CrearPasesComponent } from './pages/pases/crear-pases/crear-pases.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    ListarPeliculasComponent,
    CrearPeliculasComponent,
    ListarCinesComponent,
    ListarPasesComponent,
    CrearCinesComponent,
    CrearPasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
