import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from '../../gifs/services/gifs-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get historial():string[]{
    return this.gifsServices.historial
  }
  constructor(private gifsServices:GifsServicesService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.gifsServices.buscarGifs(termino)
  }
  
}
