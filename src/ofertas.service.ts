import {Oferta} from './app/oferta.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertaService{
  private ofertas : Oferta [];

  constructor(private http: HttpClient){}

   getOfertas() : Promise<any>{
     return this.http.get<Oferta[]>('http://localhost:3000/ofertas').toPromise();
  }



}
