import { Injectable } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  personajes:Personaje[]=[
    {
      nombre:'Gokyu',
      poder:2300
    },
    {
      nombre:'Vegeta',
      poder:1400
    }
  ]
  nuevo:Personaje={
    nombre:'Maestro rochi',
    poder: 1222
  }
  constructor() { 
    console.log('servicio inicializado')

  }
}
