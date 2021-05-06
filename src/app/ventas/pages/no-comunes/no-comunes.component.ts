import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{


nombre:string='Douglas';
genero:string='masculino';
invitacionMapa={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}

//i18nPluRAL
clientes:string[]=['Maria', 'Pedro', 'Eloisa', 'Juan', 'Cesar', 'Denis', 'Carolin'];
clientesMap={
  '=0':'no tenemos ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  '=2':'tenemos dos clientes esperando.',
  'other':'tenemos # clientes esperando.',
}

cambiarCliente(){
  this.nombre="Francisca";
  this.genero="femenino";
}
borrarCliente(){
  this.clientes.pop();
}


//keyValue  Pipe

persona={
  nombre:'DFouglas',
  edad:29,
  direccion:'Chile'
}

//async pipe
miObservable=interval(3500);
valorPromesa=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('hay data en promise')
  }, 3500)
})
}
