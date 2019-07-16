import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  
  mensaje = "";
  
  constructor(private title: Title) {}

  ngOnInit() {
      this.title.setTitle('project5- crono');
  }
  
  actualizar(t){
    this.mensaje = t + "(se actualiza cada 10 segundos)";
  }
  
}
