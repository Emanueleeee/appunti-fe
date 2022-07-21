import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ospite } from 'src/model/Ospite';
import { Prenotazione } from 'src/model/Prenotazione';
import { Tipologia } from 'src/model/Tipologia';
import { RepoOspite } from 'src/repositories/RepoOspite';
import { RepoPrenotazione } from 'src/repositories/RepoPrenotazione';
import { RepoTipologia } from 'src/repositories/RepoTipologia';
import { Validazione } from 'src/validazione/validazione';

@Component({
  selector: 'app-ospiti',
  templateUrl: './ospiti.component.html',
  styleUrls: ['./ospiti.component.css']
})
export class OspitiComponent implements OnInit {

  nOspiti:number = 1
  @Input ('nOspitiMax')
  nOspitiMax!:number
  @Output() newItemEvent=new EventEmitter<Ospite[]>()
  @Input('arrOspiti')
  Ospiti:Ospite[]=[]
  confermato:boolean=false
  b=false
  static documentatoNo=false
  strx:string[]=[]
  constructor(public repotipologia:RepoTipologia ,public repoPrenotazione:RepoPrenotazione, public repoOspite:RepoOspite) {
  }

  ngOnInit(): void {
    for(let x of this.Ospiti){
      this.strx.push("")
    }
  }

  confermaUtenti(){
    for(let x=0;x<this.nOspiti;x++){
      this.Ospiti.push(new Ospite(0,"","","",""))
      this.strx.push("")
    }
    this.confermato=true
  }

  ConfermaOspiti(){
    this.b=false
    for(let i=0 ; i<this.Ospiti.length;i++){
      if(OspitiComponent.documentatoNo==false)
      this.repoOspite.findByDocumento(this.Ospiti[i].documento).subscribe(param=>{
        if (param!=null){
          this.strx[i]+="Documento gia presente : Ospite acquisito"
          this.Ospiti[i].cognome=param.cognome
          this.Ospiti[i].nome=param.nome
          this.Ospiti[i].id=param.id
          this.Ospiti[i].indirizzo=param.indirizzo
          }
        else {
          this.strx[i]=Validazione.validaOspite(this.Ospiti[i].nome,this.Ospiti[i].cognome,this.Ospiti[i].documento)
          if(this.strx[i]!=""){
            this.b=true
          }
        }

        })
          this.strx[i]=Validazione.validaOspite(this.Ospiti[i].nome,this.Ospiti[i].cognome,this.Ospiti[i].documento)
          if(this.strx[i]!=""){
            this.b=true
          }


      }
    if (this.b==false){
      this.newItemEvent.emit(this.Ospiti)
    }
  }
  CancellaOspite(x:Ospite){
    this.Ospiti.splice(this.Ospiti.indexOf(x),1)
    this.strx.pop
    this.nOspiti=1
  }


}
