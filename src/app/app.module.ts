import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';


@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent
    
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
