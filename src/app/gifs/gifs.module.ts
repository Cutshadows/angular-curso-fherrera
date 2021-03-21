import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SlidesCssComponent } from './slides-css/slides-css.component';



@NgModule({
  declarations: [
    GifsPageComponent, 
    BusquedaComponent, 
    ResultadosComponent, SlidesCssComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent, 
    BusquedaComponent, 
    ResultadosComponent
  ]
})
export class GifsModule { }
