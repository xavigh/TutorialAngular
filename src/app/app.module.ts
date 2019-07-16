import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectornumericoComponent
 
    
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
