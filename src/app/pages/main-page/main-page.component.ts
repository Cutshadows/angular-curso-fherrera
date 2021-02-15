import { Component, OnInit } from '@angular/core';

import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  nuevo:Personaje={
    nombre:'Mastro Splinter',
    poder: 10000
  };
  // get personajes():Personaje[]{
  //     return this.dbzService.personajes;
  // }
  constructor() {  }

  ngOnInit(): void {
  }
  // agregarNuevoPersonaje(argumento:Personaje){
  //    this.personajes=[...this.personajes, argumento]
  // }

}
