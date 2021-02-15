import { Injectable } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _personajes:Personaje[]=[
    {
      nombre:'Gokyu',
      poder:2300
    },
    {
      nombre:'Vegeta',
      poder:1400
    }
  ]
  get personajes():Personaje[]{
    return [...this._personajes];
  }
  
  nuevo:Personaje={
    nombre:'Maestro rochi',
    poder: 1222
  }
  
  constructor() { 
  }

  agegarPersonaje(personaje:Personaje){
    this._personajes=[...this._personajes, personaje]
  }


}
