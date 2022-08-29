import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appunti } from '../model/Appunti';
import { BaseEntity } from '../model/BaseEntity';
import { Tag } from '../model/Tag';
import { User } from '../model/User';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string="";
  idAppunto!:number;
  lisAppPub:Appunti[]=[];
  listaTags:Tag[]=[]
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""),false, this.listaTags);
  displayedColumns: string[] = ['titolo', 'sottotitolo', 'testo', 'utenteCreazione','dataCreazione','tag'];
  pub:boolean=true;

  msg:string=''
  nomeTagArr:Tag[]=[];
  copiaListaAppunti:Appunti[]=[];
  listaAppunti:Appunti[]=[];
  tabellaTag:boolean = false;

  constructor(private userService: UserService, public route:ActivatedRoute, public repoAppunti:RepoAppunti, public router:Router) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.repoAppunti.listaAppuntiPub(this.pub).subscribe(x=>{this.lisAppPub=x});
    this.repoAppunti.listaAppuntiPub(this.pub).subscribe(x=>{this.copiaListaAppunti=x});
  }
  linkTesto(id:number){
    this.appunto.id=id
    this.router.navigate(['/testo', id])
  }

  addItem(newItem: Tag[]){
    this.nomeTagArr = newItem;
  }
  listaAppuntiXTag(){
    this.msg=""
    this.tabellaTag = true;
    this.lisAppPub=this.copiaListaAppunti;
    this.listaAppunti.splice(0, this.listaAppunti.length); //svuoto l'array usando splice(parte dal primo elemnto(0) e cancella tanti elementi quanto la lunghezza dell'array stesso)
    this.lisAppPub.forEach(app => {
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
    this.lisAppPub=this.listaAppunti;
    this.nomeTagArr.splice(0, this.nomeTagArr.length);
    return this.lisAppPub;
  }
  vediTutti(){
    this.msg=""
    this.tabellaTag=false;
    this.lisAppPub=this.copiaListaAppunti;
  }
  
}
