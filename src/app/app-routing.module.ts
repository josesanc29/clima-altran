import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';
import { TemperaturaComponent } from './pages/temperatura/temperatura.component';


const routes: Routes = [
  { path: 'buscar', component: BuscadorComponent },
  { path: 'buscar/:texto', component: BuscadorComponent },
  { path: 'grafica' , component: TemperaturaComponent},
  { path: 'ciudad' , component: CiudadComponent},
  { path: 'ciudad/:id', component: CiudadComponent },
  { path: '', component: BuscadorComponent},
  { path: '**', redirectTo: 'buscar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
