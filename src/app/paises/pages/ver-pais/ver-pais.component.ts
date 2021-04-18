import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country;
  constructor(
    private activateRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {
    console.log(this.activateRoute);
    this.activateRoute.params
    .pipe(
      switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
      tap(resp=>console.log(resp))
    ).subscribe((pais:Country)=>{
      this.pais=pais;
    });
  }

}
