import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/heroes/interfaces/heroe.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private BaseUrl:string=environment.BaseUrl;
  constructor(private http:HttpClient) { }

  getHeros():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.BaseUrl}/heroes`);
  }

  getHerobyId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.BaseUrl}/heroes/${id}`);
  }
  getHerobyTermino(termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.BaseUrl}/heroes/?q=${termino}&_limit=2`);
  }
  addHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.BaseUrl}/heroes`, heroe);
  }
  updateHero(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.BaseUrl}/heroes/${heroe.id}`, heroe);
  }
  deleteHero(id:string):Observable<any>{
    return this.http.delete<any>(`${this.BaseUrl}/heroes/${id}`);
  }
}
