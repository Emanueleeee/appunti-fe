import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Appunti } from '../model/Appunti';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoTag } from '../repositories/RepoTag';


@Component({
  selector: 'app-appunti',
  templateUrl: './appunti.component.html',
  styleUrls: ['./appunti.component.css']
})
export class AppuntiComponent implements OnInit {

  listaTags:Tag[]=[]
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), false, this.listaTags);
  statoApp:boolean=false;

  constructor(private user: TokenStorageService, public repoAppunti:RepoAppunti, public router:Router, public route:ActivatedRoute, public repoTag:RepoTag) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.appunto.id= + (params.get('cod') + '') })
    if(this.appunto.id){
      this.repoAppunti.appuntoById(this.appunto.id).subscribe(x=>{this.appunto=x})
    }
    
  }

  addItem(newItem: Tag[]){
    this.appunto.listaTag = newItem;
  }

  aggiungiAppunto(){
    this.appunto.user = this.user.getUser();
    this.appunto.user.roles = this.user.getUser().role;
    this.appunto.pub=false;
    this.appunto.utenteCreazione=this.appunto.user.username;
    this.appunto.utenteModifica=this.appunto.user.username
    this.repoAppunti.nuovoAppunto(this.appunto).subscribe();
    this.statoApp=true;
    window.location.assign("/boardUser")
    
  }
 
}
