import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    
    LoginComponent,
    AddmoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'header' , component : HeaderComponent},
      {path: 'addmovies' , component : AddmoviesComponent},
      {path: 'login' , component : LoginComponent},
      {path: 'movies' , component : MoviesComponent}
     


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
