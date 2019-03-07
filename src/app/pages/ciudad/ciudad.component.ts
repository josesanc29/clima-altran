import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/clases/weather';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  nombreCiudad = '';
  ciudad: Weather;
  ciudadesGuardadas: Weather [] = [];

  constructor(private router: Router,
              private ws: WeatherService,
              private as: AlertasService,
              private route: ActivatedRoute,
              ) {}

  ngOnInit() {
    this.ciudadesGuardadas = this.ws.weatherBuscados;
    console.log(this.ciudadesGuardadas);
    this.route.params.subscribe(parametros => {
        this.nombreCiudad = parametros['id'];
        this.obtenerDatosCiudad();
      });
  }
  obtenerDatosCiudad() {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.ciudadesGuardadas.length; index++) {
      if (this.nombreCiudad === this.ciudadesGuardadas[index].name ) {
          this.ciudad = this.ciudadesGuardadas[index];
          return this.ciudad;
      }
    }
  }
}
