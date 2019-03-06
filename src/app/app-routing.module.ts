import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoComponent } from './components/historico/historico.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  { path: 'buscar', component: BuscadorComponent },
  { path: 'buscar/:texto', component: BuscadorComponent },
  { path: '', component: BuscadorComponent},
  { path: '**', redirectTo: 'buscar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
