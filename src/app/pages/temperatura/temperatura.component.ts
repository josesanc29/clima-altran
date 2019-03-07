import { Component, OnInit } from '@angular/core';
import { Grafico } from '../../clases/grafico';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Weather } from 'src/app/clases/weather';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  grafico: Grafico;
  ciudadesStore: Weather[];
  temperatura: number;
  nombreCiudad: string;
  idsCiudades: number[];
  idCiudad: number;

  constructor(
              private ws: WeatherService,
              private as: AlertasService
              ) {
        if (this.ws.weatherBuscados.length === 0 ) {
          this.as.mensajeWarningDatos();
          return;
        }
        this.ciudadesStore = this.ws.weatherBuscados;
        this.getCiudadesGrafica();
        this.getIdsCiudades();
  }

  ngOnInit() {
  }

  getCiudadesGrafica() {
    for (const i in this.ciudadesStore) {
      if (this.ciudadesStore.length > 0) {
         this.nombreCiudad = this.ciudadesStore[i].name;
         this.grafico.ciudades.push(this.nombreCiudad);
      }
    }
    return this.grafico.ciudades;
  }

  getIdsCiudades() {
    for (const i in this.ciudadesStore) {
      if (this.ciudadesStore.length > 0) {
         this.idCiudad = this.ciudadesStore[i].id;
         this.idsCiudades.push(this.idCiudad);
      }
    }
    console.log('idsCiudades' , this.idsCiudades);
    return this.idsCiudades;
  }



}
