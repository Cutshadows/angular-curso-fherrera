import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capital } from '../interfaces/capital-interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalServicesService {

  private apiUrl:string='https://restcountries.eu/rest/v2';
  constructor(private http:HttpClient) { }

  buscarCapital(termino:string):Observable<Capital[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    console.log(url)
    return this.http.get<Capital[]>(url);

  }
}
