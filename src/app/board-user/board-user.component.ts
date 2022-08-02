import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

import { Appunti    } from 'src/app/model/appunti';
import { User } from '../model/User';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';



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
   appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), this.tags);
  content: string;

  constructor(
    private userService: UserService,
    public repoAppunti:RepoAppunti,
    public token:TokenStorageService,
   public router:Router) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }),
      this.repoAppunti.listaAppuntiUtente(this.user.id).subscribe(x=>{this.appunti=x})
      
  }
  cancellaAppunti(id:number){
    this.appunto.id=id
    this.appunto.user.id=this.token.getUser().id
    this.repoAppunti.cancellaAppunti(this.appunto).subscribe(x=>{this.appunti=x});
    
    }

  aggiungiAppunto(){
    this.router.navigate(['/appunti']);
  }

}
