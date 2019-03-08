import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/clases/weather';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscar = '';
  weather: Weather;

  constructor(
    public ws: WeatherService,
    public as: AlertasService,
    public route: ActivatedRoute,
    public router: Router
    ) {
      this.route.params.subscribe( parametros =>{
        if ( parametros['texto'] ) {
          this.buscar = parametros['texto'];
          this.buscarCiudad();
        }
      })
    }

  ngOnInit() {
  }

  buscarCiudad() {
    if ( this.buscar.length === 0) {
      return;
    }

    this.ws.searchByCity( this.buscar )
        .subscribe((resp: any) => {
          this.buscar = resp;
          this.as.mensajeAddItem();
        },
        (error: any) => {
          this.as.mensajeErrorBusqueda();
        });

  }
  resetData() {
    localStorage.removeItem('ciudades-buscadas');
    this.buscar = '';
  }

}
