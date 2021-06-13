import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { Heroe } from 'src/app/heroes/interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {
  heroes:Heroe[]=[];
  constructor(private heroesServices:HeroesService) { }

  ngOnInit(): void {
    this.heroesServices.getHeros()
        .subscribe((respuesta)=>{
            this.heroes=respuesta;
            console.log(this.heroes)
        },(error)=>{

        })
  }

}
