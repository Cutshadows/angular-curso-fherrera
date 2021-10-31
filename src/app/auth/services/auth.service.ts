import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthModels } from '../interfaces/auth.models';
import {  map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string=environment.BaseUrl;
  private _auth:AuthModels|undefined;

  get auth(){
    return {...this._auth}
  }

  constructor(private http:HttpClient) { }

  verificaAuthentication():Observable<boolean>{
    if(!sessionStorage.getItem("token")){
      return of(false);
    }
    return this.http.get<AuthModels>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map( auth=>{
        this._auth=auth;
        return true;
      })
    )
  }
  login(){
    return this.http.get<AuthModels>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(auth=>this._auth=auth),
        tap(auth=>sessionStorage.setItem("token", `${auth.id}`))
      )
  }
}
