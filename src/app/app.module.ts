import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs  from "@angular/common/locales/es-CL";
import localeFr  from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";


registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PrimeNgModule,
    SharedModule,
    VentasModule
    // HttpClientModule,
  ],
  providers: [{
    provide:LOCALE_ID, useValue:'es-CL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
