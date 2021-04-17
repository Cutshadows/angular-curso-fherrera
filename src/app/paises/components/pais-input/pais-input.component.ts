import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit{
  @Output()onNuevaBusqueda:EventEmitter<string>=new EventEmitter();
  @Output()onDebounce:EventEmitter<string>=new EventEmitter();
  @Input()placeholder:string='';
  termino:string='';

  debouncer:Subject<string>=new Subject();
  
  constructor() { }
  
  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor=>{
      // console.log('debouncer', valor);
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
    this.onNuevaBusqueda.emit(this.termino);
  }
  teclaPresionada(){
    // event:any // no se va a usar event en este caso 
    // const valor=event.target.value;
    // console.log(valor);
    // console.log(this.termino)

    this.debouncer.next(this.termino);
  }

}
