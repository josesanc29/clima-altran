import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoComponent } from './components/historico/historico.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  { path: 'historico' , component: HistoricoComponent , data: { titulo: 'Historico' }},
  { path: 'buscar', component: BuscadorComponent },
  { path: 'buscar/:texto', component: BuscadorComponent },
  { path: '**', redirectTo: 'tiempo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
