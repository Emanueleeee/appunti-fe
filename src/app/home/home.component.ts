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
  pub:boolean=true;

  constructor(private userService: UserService, public route:ActivatedRoute, public repoAppunti:RepoAppunti) { }

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
  }

}
