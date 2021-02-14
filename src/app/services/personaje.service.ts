import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { DataHeroeResponse, DataVillanoResponse } from '../interfaces/interfaces';

const apiUrlHeroe = environment.apiUrlHeroe;
const apiUrlVillano = environment.apiUrlVillano;

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(urlApi) {
    return this.http.get<T>(urlApi);
  }

  getListHeroes(){ 
   return this.ejecutarQuery<DataHeroeResponse>(apiUrlHeroe);
  }
  getListVillanos(){ 
    return this.ejecutarQuery<DataVillanoResponse>(apiUrlVillano);
   }
}
