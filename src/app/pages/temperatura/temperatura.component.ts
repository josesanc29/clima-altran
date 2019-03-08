import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Weather } from 'src/app/clases/weather';
import { WeatherList } from 'src/app/clases/weather-list';



@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  ciudadesStore: Weather[] = [];
  datosList: WeatherList[] = [] ;
  idsCiudades: number[] = [];
  idCiudad: number;
  numCiudades: number;

  constructor(
              private ws: WeatherService,
              private as: AlertasService
              ) {
        this.ciudadesStore = JSON.parse(localStorage.getItem('ciudades-buscadas'));
        this.getIdsCiudades();
        this.obtenerDatos(this.idsCiudades);
        setInterval(() => {
          this.actualizameDatos();
        }, 180000);
  }

  ngOnInit() {
  }

  getIdsCiudades() {
    for (const i in this.ciudadesStore) {
      if (this.ciudadesStore.length > 0) {
         this.idCiudad = this.ciudadesStore[i].id;
         this.idsCiudades.push(this.idCiudad);
      }
    }
    return this.idsCiudades;
  }

  obtenerDatos(ids: number[]) {
    ids = this.idsCiudades;
    this.ws.getCiudadesByIds(ids).subscribe((data: any) => {
      this.datosList = data;
    });
  }
  actualizameDatos() {
    this.obtenerDatos(this.idsCiudades);
    console.log('Se han actualizado los datos');
  }
}
