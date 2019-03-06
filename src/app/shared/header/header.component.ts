import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
               private as: AlertasService ) { }

  ngOnInit() {
  }
  buscarCiudad( texto: string) {
    if ( texto.length === 0 ) {
      this.as.mensajeWarningBuscar();
      return;
    }

    this.router.navigate(['buscar', texto]);

  }

}
