import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Weather } from '../clases/weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URL = environment.apiUrl;
  private apiKey = '&appid=08da4059951b1f8f59e55a9ca0478ae9';
  private URL_IDS = environment.apiUrlIds;
  private weather: Weather;
  public weatherBuscados: Weather[] = [];
  ciudadesGuardadas: any;
  temperaturas: any;


  constructor( public http: HttpClient ,
               public router: Router) {
  }

  searchByCity(cityName: string) {
    return this.http.get(this.URL + `${cityName}` + this.apiKey)
               .pipe( map ( (resp: any ) => {
                    this.weather = resp;
                    this.weatherBuscados.push(this.weather);
                    this.setCiudadesBuscadasStore();
                    return this.weather;
               }));
  }
  searchByCityAndCountry(cityName: string , countryId: string) {
    return this.http.get(this.URL + `${cityName},${countryId}` + this.apiKey)
               .pipe( map ( (resp: any ) => {
                    this.weather = resp;
                    this.weatherBuscados.push(this.weather);
                    this.setCiudadesBuscadasStore();
                    return this.weather;
               }));
  }

  getCiudadesByIds(idsCiudades: number[]): Observable<any> {
    return this.http.get(this.URL_IDS +`${idsCiudades}`+ this.apiKey)
                    .pipe( map ( ( resp: any ) => {
                      this.weather = resp;
                      return this.weather;
                    }));
  }
  
  setCiudadesBuscadasStore() {
    localStorage.setItem('ciudades-buscadas', JSON.stringify( this.weatherBuscados )  );
  }

  getCiudadesBuscadasStore() {
    return JSON.parse(localStorage.getItem('ciudades-buscadas'));
  }

}
