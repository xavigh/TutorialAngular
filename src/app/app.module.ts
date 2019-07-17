import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementosModule } from './elementos/elementos.module'



@NgModule({
  declarations: [
    AppComponent    
 
    
  ],
  imports: [
    BrowserModule,
    ElementosModule   
  ],
  providers: [
  Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
