import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  mensajeAddItem() {
    swal({
      title: 'Añadida ciudad!',
      text: 'Se ha añadido una nueva ciudad al historico',
      type: 'success'
    });
  }
  mensajeErrorBusqueda() {
    swal({
      title: 'Error en la busqueda!',
      text: 'No existe una ciudad con los criterios de busqueda introducidos',
      type: 'error'
    });
  }
  mensajeWarningBuscar() {
    swal({
      title: 'Prueba otra vez!',
      text: 'Debes introducir el nombre de una ciudad',
      type: 'info'
    })
  }
  mensajeWarningForma() {
    swal({
      title: 'Cuidado!',
      text: 'Debes elegir una ciudad y un pais',
      type: 'info'
    })
  }

}
