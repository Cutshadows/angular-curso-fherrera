import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados(){
    return this._gifServices.resultados;
  }
  constructor( private _gifServices:GifsServicesService) { 

  }

  

}
