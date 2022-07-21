import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ospite } from 'src/model/Ospite';
import { Prenotazione } from 'src/model/Prenotazione';
import { Servizio } from 'src/model/Servizio';
import { Stanza } from 'src/model/Stanza';
import { Tipologia } from 'src/model/Tipologia';
import { Utente } from 'src/model/Utente';
import { RepoOspite } from 'src/repositories/RepoOspite';
import { RepoPrenotazione } from 'src/repositories/RepoPrenotazione';
import { RepoServizio } from 'src/repositories/RepoServizio';
import { RepoTipologia } from 'src/repositories/RepoTipologia';
import { RepoStanza } from 'src/repositories/RepoStanza';
import { RepoUtente } from 'src/repositories/RepoUtente';
import { utenteLogged } from 'src/Utente/utenteLogged';
import { OspitiComponent } from '../ospiti/ospiti.component';

@Component({
  selector: 'app-dettagli-prenotazione',
  templateUrl: './dettagli-prenotazione.component.html',
  styleUrls: ['./dettagli-prenotazione.component.css']
})
export class DettagliPrenotazioneComponent implements OnInit {

  //arrOspiti: Ospite[] = []
  //arrServizi: Servizio[] = []
  //stanza!: Stanza
  //utente!: Utente
  idPreno: number = 0;
  //tipologia!:Tipologia;
  prenotazione: Prenotazione = new Prenotazione(0, new Date(), new Date(), new Stanza(0, 0, new Tipologia(0, "", 0)),[],[],new Utente(0,"","",false,"","",""))
  confermato = false
  modalita = false
  modalitaS = false;
  confermatoS = false;
  constructor(public repoStanza: RepoStanza, public repoOspiti: RepoOspite, public repoServizi: RepoServizio, public route: ActivatedRoute, public repoPrenotazione: RepoPrenotazione, public router: Router, public repoTipologia: RepoTipologia, public logged: utenteLogged, public repoUtente: RepoUtente) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.idPreno = + (params.get('cod') + '') })
    this.repoPrenotazione.getPrenotazione(this.idPreno).subscribe(x => { this.prenotazione = x })
    //this.repoStanza.getStanzaPrenotazione(this.idPreno).subscribe(x => { this.stanza = x; });
    //this.repoOspiti.listaOspitiByPreno(this.idPreno).subscribe(x => { this.arrOspiti = x; });
    //this.repoServizi.listaServiziByPreno(this.idPreno).subscribe(x => { this.arrServizi = x; });
    //this.repoTipologia.getTipologiaXStanza(this.idPreno).subscribe(x => { this.tipologia = x; });
  }

  cancella() {
    //restituisce una lista di prenotazioni
    this.repoPrenotazione.cancellaPrenotazione(this.prenotazione).subscribe()
    this.router.navigate(['/cancellazione'])
  }

  modificaOspiti() {
    //this.repoPrenotazione.modificaPrenotazione(this.prenotazione);
    this.modalita = true;
    this.confermato = false
    this.modalitaS = true;
    OspitiComponent.documentatoNo=true
  }
  modificaServizi() {
    this.confermato = true;
    this.modalita = true;
    this.modalitaS = true;
    this.confermatoS = true;

  }
  ConfermaServiziFiglio(Servizi: Servizio[]) {
    this.prenotazione.listaServizi = Servizi
    this.confermaOspitiFinale();
    this.modalita = false;
    this.confermato = false;
    this.modalitaS = false;
    this.confermatoS = false;
  }

  confermaOspiti(Ospiti: Ospite[]) {
    this.prenotazione.listaOspiti = Ospiti;
    this.confermaOspitiFinale()
    this.confermato = true
    this.modalita = false
    this.modalitaS = false;
    OspitiComponent.documentatoNo=false
  }

  confermaOspitiFinale() {
    //this.prenotazione.listaOspiti = this.arrOspiti;
    //this.prenotazione.stanza = this.stanza
    //this.prenotazione.listaServizi = this.arrServizi
    //this.prenotazione.utente = this.logged.u
    this.repoPrenotazione.NuovaPrenotazione(this.prenotazione).subscribe()
  }
}
