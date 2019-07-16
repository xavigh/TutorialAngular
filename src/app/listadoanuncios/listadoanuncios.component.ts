import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadoanuncios',
  templateUrl: './listadoanuncios.component.html',
  styleUrls: ['./listadoanuncios.component.css']
})
export class ListadoanunciosComponent implements OnInit {

  @Input() datos;

   onevar:string = "hello";

  constructor() { 

  }

  ngOnInit() {
    this.onevar = this.onevar;
  }

}
