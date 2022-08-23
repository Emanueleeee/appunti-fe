import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

import { Appunti    } from 'src/app/model/Appunti';
import { User } from '../model/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';

import { EventBusService } from '../_shares/event-bus.service';
import { EventData } from '../_shares/EventData';




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

  nomeTag!:string
  listaAppunti:Appunti[]=[];
  lapp:boolean = false;

  listaAppuntiPub:Appunti[]=[];
  pub:boolean=false;

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
      this.lapp = false;
      this.listaAppuntiPub.push(new Appunti(this.baseEntity,0,"","","",new User(0,"","",""),false, this.tags));
      
  }
  cancellaAppunti(id:number){
    this.appunto.id=id
    this.appunto.user.id=this.token.getUser().id
    this.repoAppunti.cancellaAppunti(this.appunto).subscribe(x=>{this.appunti=x});
    
    }
  modifica(id:number){
  this.appunto.id=id
  this.router.navigate(['/appunti', id])
  }
  aggiungiAppunto(){
    this.router.navigate(['/appunti']);
  }

  listaAppuntiXTag(){
    this.lapp = true;
    this.listaAppunti.splice(0, this.listaAppunti.length); //svuoto l'array usando splice(parte dal primo elemnto(0) e cancella tanti elementi quanto la lunghezza dell'array stesso)
    this.appunti.forEach(app => {
      app.listaTag.forEach(tag => {
        if(tag.name == this.nomeTag){
          this.listaAppunti.push(app);
        }
      });
    });
    return this.listaAppunti;
  }

  pubblica(x:Appunti){
    //this.router.navigate(['/home', id]);
      x.pub=true;
      this.repoAppunti.nuovoAppunto(x).subscribe();
      this.listaAppuntiPub.push(x)
    }

    linkTesto(id:number){
      this.appunto.id=id
      this.router.navigate(['/testo', id])
      }
}
