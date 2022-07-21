import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaTipologiaComponent } from './lista-tipologia/lista-tipologia.component';
import { ListaStanzeComponent } from './lista-stanze/lista-stanze.component';
import { HomeComponent } from './home/home.component';
import { OspitiComponent } from './ospiti/ospiti.component';
import { LoginStatusComponent } from './login-status/login-status.component';
import { PaginaUtenteComponent } from './pagina-utente/pagina-utente.component';
import { LoginPortableComponent } from './login-portable/login-portable.component';
import { ServiziComponent } from './servizi/servizi.component';
import { CongratulazioniComponent } from './congratulazioni/congratulazioni.component';
import { DettagliPrenotazioneComponent } from './dettagli-prenotazione/dettagli-prenotazione.component';
import { CancellazioneComponent } from './cancellazione/cancellazione.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ListaTipologiaComponent,
    ListaStanzeComponent,
    HomeComponent,
    OspitiComponent,
    LoginStatusComponent,
    PaginaUtenteComponent,
    LoginPortableComponent,
    ServiziComponent,
    CongratulazioniComponent,
    DettagliPrenotazioneComponent,
    CancellazioneComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent},
      {path: 'registrazione', component:RegistrazioneComponent},
      {path: 'listaTipologia', component:ListaTipologiaComponent},
      {path: 'listaStanze/:cod', component:ListaStanzeComponent},
      {path: 'home',component:HomeComponent},
      {path: 'paginaUtente',component:PaginaUtenteComponent},
      {path: 'servizi',component:ServiziComponent},
      {path: 'congratulazioni',component:CongratulazioniComponent},
      {path: 'dettagliPrenotazione/:cod', component:DettagliPrenotazioneComponent},
      {path: 'cancellazione', component:CancellazioneComponent},
      {path: '',component:HomeComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
