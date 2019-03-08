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
  datosList: Weather[] = [] ;
  idsCiudades: number[] = [];
  idCiudad: number;

  constructor(
              private ws: WeatherService,
              private as: AlertasService
              ) {
        this.ciudadesStore = JSON.parse(localStorage.getItem('ciudades-buscadas'));
        this.getIdsCiudades();
        this.obtenerDatosInterval(this.idsCiudades);
        // setInterval(() => {
        //  this.obtenerTemperaturasServicio();
        // }, 180000);
  }

  ngOnInit() {
  }

  getIdsCiudades() {
    for (const i in this.ciudadesStore) {
      if (this.ciudadesStore.length > 0) {
         this.idCiudad = this.ciudadesStore[i].id;
         this.idsCiudades.push(this.idCiudad);
         console.log('ids ciudades number', this.idsCiudades)
      }
    }
    return this.idsCiudades;
  }

  obtenerDatosInterval(ids: number[]) {
    ids = this.idsCiudades;
    console.log('obtenerDatosInterval - ids', ids);
    this.ws.getCiudadesByIds(ids).subscribe((data: any) => {
      console.log('obtenerDatosInterval' , data);
      this.datosList = data;
    });
  }


}
