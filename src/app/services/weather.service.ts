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
  private weatherIds: Weather[];
  private historialTemperaturas: number [] = [];
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

  obtenerTemperatura(idsCiudades: number[]) {
    return this.http.get(this.URL + `${idsCiudades}` + this.apiKey)
                    .pipe( map ( ( resp: any ) => {
                      console.log(resp);
                      this.weatherIds = resp;
                      console.log('obtener listado ids', this.weatherIds);
                    }));
  }
  setCiudadesBuscadasStore() {
    this.ciudadesGuardadas = localStorage.setItem('ciudades-buscadas', JSON.stringify( this.weatherBuscados )  );
  }
  setTemperaturasStore() {
    this.temperaturas  = localStorage.setItem ('historial-temperaturas' , JSON.stringify( this.historialTemperaturas ));
   }
  getTemperaturasStore() {
    return JSON.parse(localStorage.getItem('historial-temperaturas'));
  }
  getCiudadesBuscadasStore() {
    return JSON.parse(localStorage.getItem('ciudades-buscadas'));
  }
  resetearDatosAplicacion() {
    if (localStorage.getItem('historial-temperaturas') || localStorage.getItem('ciudades-buscadas')) {
      this.temperaturas = '';
      this.ciudadesGuardadas = '';
      this.historialTemperaturas = [];
      this.weatherBuscados = [];
    } else {
      return false;
    }
  }

}
