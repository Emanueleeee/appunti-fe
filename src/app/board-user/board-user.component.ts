import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

import { Appunti    } from 'src/app/model/Appunti';
import { User } from '../model/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';

import { EventBusService } from '../_shares/event-bus.service';
import { EventData } from '../_shares/EventData';

export interface PeriodicElement {
  titolo: string;
  sottotitolo: string;
  testo: string;
  utenteCreazione: string;
  dataCreazione:Data;
  tag:Tag;
  opzioni:string
}



@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  appunti:Appunti[]=[]
  user:User= this.token.getUser()
  tags:Tag[]=[];
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""),false, this.tags);
  content: string="";
  msg=""
  nomeTag!:string;
  nomeTagArr:Tag[]=[];
  listaAppunti:Appunti[]=[];
  tabellaTag:boolean = false;
  listaTagRicerca:Tag[]=[];
  listaAppuntiPub:Appunti[]=[];
  displayedColumns: string[] = ['titolo', 'sottotitolo', 'testo', 'utenteCreazione','dataCreazione','tag', 'opzioni'];
  copiaListaAppunti:Appunti[]=[];

  constructor(
    private userService: UserService,
    public repoAppunti:RepoAppunti,
    public token:TokenStorageService,

   public router:Router,
   public eventBusService:EventBusService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {

        this.content = JSON.parse(err.error).message;
        this.content = err.error.message || err.error || err.message;
        if (err.status === 403)

          this.eventBusService.emit(new EventData('logout', null));
      }),
      this.repoAppunti.listaAppuntiUtente(this.user.id).subscribe(x=>{this.appunti=x})
      this.tabellaTag = false;
      this.repoAppunti.listaAppuntiUtente(this.user.id).subscribe(x=>{this.copiaListaAppunti=x})
      
  }
  cancellaAppunti(id:number){
    this.appunto.id=id
    this.appunto.user.id=this.token.getUser().id
    this.repoAppunti.cancellaAppunti(this.appunto).subscribe(x=>{this.appunti=x});
    window.location.reload()
    }
  modifica(id:number){
  this.appunto.id=id
  this.router.navigate(['/appunti', id])
  }
  aggiungiAppunto(){
    this.router.navigate(['/appunti']);
  }

  addItem(newItem: Tag[]){
    this.nomeTagArr = newItem;
    /*
    newItem.forEach(element => {
      this.nomeTag=element.name;
    });
    */
  }
  listaAppuntiXTag(){
    this.msg=""
    this.tabellaTag = true;
    this.appunti=this.copiaListaAppunti;
    this.listaAppunti.splice(0, this.listaAppunti.length); //svuoto l'array usando splice(parte dal primo elemnto(0) e cancella tanti elementi quanto la lunghezza dell'array stesso)
    this.appunti.forEach(app => {
      app.listaTag.forEach(tag => {
        this.nomeTagArr.forEach(element => {
          if(element.name==tag.name)
            this.listaAppunti.push(app);
        });
      });
    });
    if(this.listaAppunti.length==0){
      this.msg="Non esistono appunti con quel tag"
    }
    this.appunti=this.listaAppunti;
    this.nomeTagArr.splice(0, this.nomeTagArr.length);
    return this.appunti;
  }
  vediTutti(){
    this.msg=""
    this.tabellaTag=false;
    this.appunti=this.copiaListaAppunti;
  }

  pubblica(x:Appunti){
      x.pub=true;
      this.repoAppunti.nuovoAppunto(x).subscribe();
      this.listaAppuntiPub.push(x)
  }
  privato(x:Appunti){
    x.pub=false;
    this.repoAppunti.nuovoAppunto(x).subscribe();
    this.listaAppuntiPub.splice(x.id,1)
  }

  linkTesto(id:number){
    this.appunto.id=id
    this.router.navigate(['/testo', id])
  }
}
