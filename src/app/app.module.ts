import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListadoanunciosComponent } from './listadoanuncios/listadoanuncios.component';



@NgModule({
  declarations: [
    AppComponent,
    ListadoanunciosComponent
 
    
  ],
  imports: [
    BrowserModule   
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
