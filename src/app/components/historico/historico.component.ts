import { Component, OnInit} from '@angular/core';
import { Paises } from '../../clases/paises';
import { Ciudades } from '../../clases/ciudades';
import { Weather } from 'src/app/clases/weather';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  forma: FormGroup;

  ciudades: Ciudades [] = [
    { id: 1 , nombre: 'Buenos Aires'},
    { id: 2 , nombre: 'Lima'},
    { id: 3 , nombre: 'Sao Paulo'},
    { id: 4 , nombre: 'Santiago'}
  ];
  paises: Paises [] = [
    { id: 'ar' , nombre: 'Argentina'},
    { id: 'pe' , nombre: 'Peru'},
    { id: 'br' , nombre: 'Brasil'},
    { id: 'cl' , nombre: 'Chile'}
  ];

  weather: Weather;
  nombrePais: string;
  nombreCiudad: string;

  constructor(
               private router: Router,
               public ws: WeatherService,
               public as: AlertasService
               ) {
    this.forma = new FormGroup({
      paisNombre: new FormControl( this.paises , Validators.required),
      ciudadNombre: new FormControl(this.ciudades , Validators.required)
    });
  }

  ngOnInit() {
  }

  enviarFormulario() {
    if (this.forma.invalid) {
      this.as.mensajeWarningForma();
      return false;
    }
    this.ws.searchByCityAndCountry(this.forma.value.ciudadNombre , this.forma.value.paisNombre)
            .subscribe( (data: any) => {
                    this.weather = data;
                    this.as.mensajeAddItem();
                          },
                        ( error) => {
                          this.as.mensajeWarningForma();
                        });
  }

}
