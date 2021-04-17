import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { CapitalServicesService } from '../../services/capital-services.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  hayError:boolean=false;
  termino:string='';
  paises:Country[]=[];
  constructor(private capitalService:CapitalServicesService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.capitalService.buscarCapital(this.termino)
    .subscribe(paises=>{
      console.log(paises)
      this.paises=paises;
    },(error)=>{
      this.hayError=true;
      this.paises=[];
    });
  }

}
