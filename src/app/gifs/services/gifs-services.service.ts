import { HttpBackend, HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private httpWithOut:HttpClient;
  // private serviceUrl:string='?api_key=${this.apiKey}&q=${query}&limit=10'
  private serviceUrl:string='https://api.giphy.com/v1/gifs';
  private apiKey:string='oGc2FYL07XDc5rWEwF1EwRzXylRNUOj2';
  private _historial:string[]=[];
  // TODO: Cambiar ANY POR SU TIPADO
  public resultados:Gif[]=[];

  constructor(
    private http:HttpClient,
    private httpBackend:HttpBackend
    ){
      this.httpWithOut=new HttpClient(httpBackend);
      this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
      this.resultados=JSON.parse(localStorage.getItem('resultado')!)||[];
      // if(localStorage.getItem('historial')){
        // this._historial=JSON.parse(localStorage.getItem('historial')!);
      // }
  }



  get historial(){
    // this._historial=this._historial.splice(0,10);
    return [...this._historial];
  }


  buscarGifs(query:string=''){
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){ //evaluar si this._historial tiene en su contenido el query que intento ingresar
      
      this._historial=[query ,...this._historial];
      this._historial=this._historial.splice(0,10);

      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    const params=new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)


    console.log(params);
    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
    .subscribe((resp)=>{
      console.log(resp.data)
      this.resultados=resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultados));

    })

  //  fetch(`https://api.giphy.com/v1/gifs/search?api_key=oGc2FYL07XDc5rWEwF1EwRzXylRNUOj2&q=dragon%20ball%20z&limit=10`)
  //   .then(resp=>resp.json()
  //   .then(data=>{
  //     console.log(data)
  //   }))
  // const resp=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=oGc2FYL07XDc5rWEwF1EwRzXylRNUOj2&q=dragon%20ball%20z&limit=10`);
  // const data=await resp.json();
  // console.log(data)
    
    
}



}
