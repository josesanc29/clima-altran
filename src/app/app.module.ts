// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
// import { ChartsModule } from 'ng2-charts';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CiudadComponent } from './pages/ciudad/ciudad.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoricoComponent,
    BuscadorComponent,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // ChartsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
