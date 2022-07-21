import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ospite } from 'src/model/Ospite';
import { Prenotazione } from 'src/model/Prenotazione';
import { Servizio } from 'src/model/Servizio';
import { Stanza } from 'src/model/Stanza';
import { Tipologia } from 'src/model/Tipologia';
import { Utente } from 'src/model/Utente';
import { RepoPrenotazione } from 'src/repositories/RepoPrenotazione';
import { RepoStanza } from 'src/repositories/RepoStanza';
import { RepoTipologia } from 'src/repositories/RepoTipologia';
import { utenteLogged } from 'src/Utente/utenteLogged';
import { Validazione } from 'src/validazione/validazione';

@Component({
  selector: 'app-lista-stanze',
  templateUrl: './lista-stanze.component.html',
  styleUrls: ['./lista-stanze.component.css']
})
export class ListaStanzeComponent implements OnInit {

  public id: number = 0;
  public tipo:Tipologia= new Tipologia(0,"",0)
  public dataInizio: Date= new Date()
  public dataFine: Date = new Date()
  public dataMinimo:string= new Date().toJSON().split('T')[0];
  public dataMinimoFine :string = new Date().toJSON().split('T')[0];
  public arrStanze: Stanza[]=[]
  public numeroStanze:number=0
  public capienzafiglio!:number
  public Ospiti:Ospite[]=[]
  public Servizi:Servizio[]=[]

  public msg=""
  public accesso:Boolean=false;
  public prenotato:boolean|undefined
  public conferma=false
  public statoO:string="non fatto"
  public statoS:string="non fatto"

  prenotazione: Prenotazione = new Prenotazione(0, new Date(), new Date(), new Stanza(0, 0, new Tipologia(0, "", 0)),[],[],new Utente(0,"","",false,"","",""))
  constructor( public route: ActivatedRoute, public repoStanza: RepoStanza, public repoPrenotazione:RepoPrenotazione,public repoTipologia:RepoTipologia, public logged:utenteLogged) {
    this.dataInizio= new Date()
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.id = +(params.get('cod') + ''); })
    this.repoTipologia.trovaTipologia(this.id).subscribe(x=>{this.tipo=x
                                                              this.capienzafiglio=x.capienza})
    this.dataInizio= new Date()
  }
  //Gli passiamo l'id della tipologia per fare uscire le stanze disponibili
  //su quella tipologia, dopo controllo di date sulle altre prenotazioni
  //per vedere se sono disponibili
  ricercaStanzaPerTipologia()//Ritorna la stanza
  {
    console.log(this.dataFine)
    if(this.dataInizio.valueOf()>this.dataFine.valueOf()||this.dataInizio.valueOf()==this.dataFine.valueOf()){
      this.msg="Date non valide"
      this.prenotato=undefined
    }
    else{
      this.prenotazione.dataFine = this.dataFine;
      this.prenotazione.dataInizio = this.dataInizio;
      this.prenotazione.stanza.tipologia.id = this.id;
      this.prenotato=false
      this.repoStanza.ricercaStanzaPerTipologia(this.prenotazione).subscribe(x => { this.arrStanze = x; });
      this.msg=""
    }
  }
  CreaPrenotazione(){

    this.prenotato=true
    this.prenotazione.stanza=this.arrStanze[0]
    this.prenotazione.utente=this.logged.getLogged();
  }

  addItemO(newItem: Ospite[]){
    this.Ospiti=newItem
    this.statoO="fatto"
  }
  addItemS(newItem: Servizio[]){
    this.Servizi=newItem
    this.statoS="fatto"
  }

  AggiungiPrenotazione(){
    this.prenotazione.listaOspiti=this.Ospiti
    this.prenotazione.listaServizi=this.Servizi

    this.repoPrenotazione.NuovaPrenotazione(this.prenotazione).subscribe()
  }

  calcolaDataMinimafine(event :any){
    let data=event.target.value.split('-')
    this.dataFine=this.dataInizio
    data[2]=parseInt(data[2])+1
    this.dataMinimoFine=new Date(data[0]+'-'+data[1]+'-'+data[2]).toJSON().split('T')[0]
  }

}




