import { Component, Input, Output, EventEmitter } from '@angular/core';


import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html',
})
export class AgregarHeroeComponent {
  //@Input()personajes:Personaje[]=[];
  @Input()nuevo:Personaje={
    nombre:'',
    poder:0
  }
  // @Output()onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter();

  constructor(private dbzService:DbzService) { }

  agregar(){
     if(this.nuevo.nombre.trim().length ===0){return;}
     //this.personajes.push(this.nuevo);
    //  this.onNuevoPersonaje.emit(this.nuevo);
     //this.personajes=[this.nuevo, ...this.personajes]
    this.dbzService.agegarPersonaje(this.nuevo);
     this.nuevo={
       nombre:'',
       poder:0
     }
  }
}
