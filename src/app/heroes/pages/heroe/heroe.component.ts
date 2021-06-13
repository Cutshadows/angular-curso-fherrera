import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/heroes/interfaces/heroe.interface';
import { switchMap} from 'rxjs/operators'
import { HeroesService } from 'src/app/heroes/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width:100%;
      border-radius:5px;
    }
  `]
})
export class HeroeComponent implements OnInit {
  heroe!:Heroe;
  constructor(
    private activeRouter:ActivatedRoute, 
    private heroeService: HeroesService,
    private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params.pipe(
      switchMap(({id})=>this.heroeService.getHerobyId(id))
    ).subscribe(heroeId=>this.heroe=heroeId)
  }

  return(){
    this.router.navigate(['heroes/listado']);
  }
}
