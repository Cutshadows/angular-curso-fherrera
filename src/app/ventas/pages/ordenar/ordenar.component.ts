import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayuscula:boolean=true;
  ordenarPor:string='';
  heroe:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true,
      color:Color.rojo
    },
    {
      nombre:'Mujer Maravilla',
      vuela:true,
      color:Color.verde
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color:Color.azul
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  cambiar(){
    this.enMayuscula=!this.enMayuscula;
  }
  
  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }

}
