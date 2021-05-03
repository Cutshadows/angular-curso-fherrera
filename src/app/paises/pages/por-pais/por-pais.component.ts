import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor:pointer;
  }
  `
  ]
})
export class PorPaisComponent {
  hayError:boolean=false;
  paisesSugeridos:Country[]=[];
  termino:string='';
  paises:Country[]=[];
  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino)
    .subscribe(paises=>{
      console.log(paises)
      this.paises=paises;
    },(error)=>{
      this.hayError=true;
      this.paises=[];
    });
  }

  sugerencias(termino:string){
    this.hayError=false;
    //TODO: crear sugerencias

    this.paisService.buscarPais(termino)
        .subscribe(paises=>this.paisesSugeridos=paises.splice(0,3),
        (err)=>this.paisesSugeridos=[])

  }
}
