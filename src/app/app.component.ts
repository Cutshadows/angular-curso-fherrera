import { Component } from '@angular/core';
import {  } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre:string = 'douglas baRraza';
  valor:number=127789;
  obj={
    nombre:'Douglas',
    apellido:'Barraza'
  }



  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}



