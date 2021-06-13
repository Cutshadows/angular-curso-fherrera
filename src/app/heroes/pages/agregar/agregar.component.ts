import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  publishers=[
    {
      id:"Marvel Comics",
      desc:'Marvel - Comics'
    },
    {
      id:"DC Comics",
      desc:'DC - Comics'
    }
  ];
  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.MarvelComics,
    alt_img:''
  }
  constructor(private heroeServices:HeroesService) { }

  ngOnInit(): void {
  }
  guardar(){
    if(this.heroe.superhero.trim().length ===0){
      return;
    }
    this.heroeServices.addHeroe(this.heroe!)
        .subscribe(heroe=>console.log(heroe));
  }
}
