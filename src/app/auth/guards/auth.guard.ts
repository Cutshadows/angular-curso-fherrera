import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate { 
  constructor(private authService:AuthService, private ruta:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verificaAuthentication()
      .pipe(
        tap(estaAuthenticado=>{
          if(!estaAuthenticado){
            this.ruta.navigate(['./auth/login']);
          }
        })
      )

    //   if(this.authService.auth.id){
    //     return true;
    //   }
    // return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean > | boolean  {
      return this.authService.verificaAuthentication()
      .pipe(
        tap(estaAuthenticado=>{
          if(!estaAuthenticado){
            this.ruta.navigate(['./auth/login']);
          }
        })
      )
    //   if(this.authService.auth.id){
    //     return true;
    //   }
    // return false;
  }
}
