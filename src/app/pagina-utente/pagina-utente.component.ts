import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Prenotazione } from 'src/model/Prenotazione';
import { Utente } from 'src/model/Utente';
import { RepoPrenotazione } from 'src/repositories/RepoPrenotazione';
import { RepoStanza } from 'src/repositories/RepoStanza';
import { RepoUtente } from 'src/repositories/RepoUtente';
import { utenteLogged } from 'src/Utente/utenteLogged';

@Component({
  selector: 'app-pagina-utente',
  templateUrl: './pagina-utente.component.html',
  styleUrls: ['./pagina-utente.component.css']
})
export class PaginaUtenteComponent implements OnInit {
  utente!: Utente;
  arrPrenotazioni: Prenotazione[] = []
  prenotazioniGestore:Prenotazione[]=[]
  y!:Prenotazione

  constructor(public logged: utenteLogged, public repoPrenotazioni: RepoPrenotazione, public repoStanza: RepoStanza, public router:Router, public repoUtente:RepoUtente) { }

  ngOnInit(): void {
    this.utente = this.logged.getLogged();
    //PER Utente
    if(this.logged.u.gestore==false)
    this.repoPrenotazioni.getPrenotazioniUtente(this.utente.id).subscribe(x => { this.arrPrenotazioni = x; });
    //Per Admin
    else
    this.repoPrenotazioni.listaPrenotazioni().subscribe(x=>{this.arrPrenotazioni=x;});
  }

  //dettagliStanza(x:Prenotazione) {

   //this.repoStanza.getStanzaPrenotazione(x.id).subscribe(param => { x.stanza = param; })

  //}
  dettagli(x:Prenotazione) {
    this.y=x;
    //this.dettagliStanza(this.y);
    //console.log(this.y);
    this.router.navigate(['/dettagliPrenotazione', x.id])
  }

  //Metodi Gestore
  listaPrenotazioni(){
    this.repoPrenotazioni.listaPrenotazioni().subscribe(x=>{this.prenotazioniGestore=x;});
  }

  
}
