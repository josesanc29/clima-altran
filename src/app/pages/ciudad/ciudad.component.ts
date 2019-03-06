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

  ciudad: Weather;
  ciudadesGuardadas: Weather [] = [];

  constructor(private router: Router,
              private ws: WeatherService,
              private as: AlertasService,
              private route: ActivatedRoute,
              ) {
      this.ciudadesGuardadas = this.ws.weatherBuscados;
      console.log(this.ciudadesGuardadas);
      this.route.params.subscribe(parametros => {
        console.log('obj ciudad' , parametros);
      });
  }

  ngOnInit() {
  }
}