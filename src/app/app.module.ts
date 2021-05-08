import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


// import localeEs  from "@angular/common/locales/es-CL";
// import localeFr  from "@angular/common/locales/fr";
// import { registerLocaleData } from "@angular/common";
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
// registerLocaleData(localeEs);
// registerLocaleData(localeFr);
// {
//   provide:LOCALE_ID, useValue:'es-CL'
// }

@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
