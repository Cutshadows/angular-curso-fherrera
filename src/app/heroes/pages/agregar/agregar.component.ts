import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from 'src/app/heroes/interfaces/heroe.interface';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[
    `
    img{
      width:100%;
      border-radius:5px;
    }    
    `
  ]
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
  constructor(private heroeServices:HeroesService,
             private activateRoute:ActivatedRoute,
             private snackBar:MatSnackBar,
             private matdialog:MatDialog,
             private router:Router) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }
    this.activateRoute.params.pipe(
      switchMap(({id})=>this.heroeServices.getHerobyId(id))
    ).subscribe((heroe)=>this.heroe=heroe);
  }
  guardar(){
    if(this.heroe.superhero.trim().length ===0){
      return;
    }
    if(this.heroe.id){
      this.heroeServices.updateHero(this.heroe!)
      .subscribe(heroe=>this.mostrarSnakbar(`Registro actualizado ${heroe.superhero}`));
    }else{
      this.heroeServices.addHeroe(this.heroe!)
      .subscribe(heroe=>
        this.router.navigate(['/heroes', heroe.id]));
        this.mostrarSnakbar(`Registro creado`)
    }
    
  }
  borrar(){
    const dialog=this.matdialog.open(ConfirmarComponent, {
      width:'20%',
      data:this.heroe
    });
    dialog.afterClosed()
    .pipe(
      switchMap((resultSnackDialog)=>resultSnackDialog?this.heroeServices.deleteHero(this.heroe.id!):of(false))
    ).subscribe(resDeleteHero=>{
        this.router.navigate(['/heroes']);
     })
    
  }
  mostrarSnakbar(mensaje:string){
    this.snackBar.open(mensaje, 'ok!', {
      duration:2500
    })
  }
}
