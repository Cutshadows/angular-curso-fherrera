import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {


  @ViewChild('txtBuscar')txtBuscar:ElementRef<HTMLInputElement>;


  constructor(private gifServices:GifsServicesService){

  }

  buscar(){//termino:string
    const values=this.txtBuscar.nativeElement.value;
    // document.querySelector('input').value="";
    if(values.trim().length===0) return null;
    this.gifServices.buscarGifs(values);

    this.txtBuscar.nativeElement.value='';
  }

}
