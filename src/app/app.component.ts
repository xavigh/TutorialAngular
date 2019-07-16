import { Component, ViewChild } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  
 
  
  constructor(private title: Title) {}

  ngOnInit() {
      this.title.setTitle('project5- crono');
  }
  
  @ViewChild('selector1', null) selector1: SelectornumericoComponent;
  @ViewChild('selector2', null) selector2: SelectornumericoComponent;  

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }
}
