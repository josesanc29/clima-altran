import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Weather } from '../clases/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private URL = environment.apiUrl;
  private apiKey = '&appid=08da4059951b1f8f59e55a9ca0478ae9';
  private weather: Weather;
  private temperatura: number;
  private historialTemperaturas: number [] = [];
  public weatherBuscados: Weather[] = [];


  constructor( public http: HttpClient ,
               public router: Router) {}

  searchByCity(cityName: string) {
    return this.http.get(this.URL + `${cityName}` + this.apiKey)
               .pipe( map ( (resp: any ) => {
                    this.weather = resp;
                    this.weatherBuscados.push(this.weather);
                    this.ciudadesBuscadasStore();
                    return this.weather;
               }));
  }
  searchByCityAndCountry(cityName: string , countryId: string) {
    return this.http.get(this.URL + `${cityName},${countryId}` + this.apiKey)
               .pipe( map ( (resp: any ) => {
                    this.weather = resp;
                    this.weatherBuscados.push(this.weather);
                    this.ciudadesBuscadasStore();
                    return this.weather;
               }));
  }
  getTemperatura(cityName: string) {
    return this.http.get(this.URL + `${cityName}` + this.apiKey)
               .pipe( map ( (resp: any ) => {
                 console.log(resp);
                    // this.weather = resp;
                    // this.weatherBuscados.push(this.weather);
                    // this.ciudadesBuscadasStore();
                    // return this.weather;

               }));
  }

  ciudadesBuscadasStore() {
    localStorage.setItem('ciudades-buscadas', JSON.stringify( this.weatherBuscados )  );
  }
  temperaturasStore() {
    localStorage.setItem ('historial-temperaturas' , JSON.stringify( this.historialTemperaturas ));
   }
  getBusquedaStorage() {
    JSON.parse(localStorage.getItem('busqueda'));
  }
  resetearDatos() {
    localStorage.removeItem('ciudades-buscadas');
    localStorage.removeItem('')
  }

}
