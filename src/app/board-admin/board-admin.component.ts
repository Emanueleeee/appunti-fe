import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appunti } from '../model/Appunti';
import { BaseEntity } from '../model/BaseEntity';
import { Tag } from '../model/Tag';
import { User } from '../model/User';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string="";
  arrAppunti:Appunti[]=[]
  tags:Tag[]=[];
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  displayedColumns: string[] = ['titolo', 'sottotitolo', 'testo', 'utenteCreazione','dataCreazione','tag'];
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""),false, this.tags);

  constructor(private userService: UserService, public repoAppunti:RepoAppunti, public router:Router,) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.repoAppunti.listaAppunti().subscribe(x=>{this.arrAppunti=x;});
  }
  linkTesto(id:number){
    this.appunto.id=id
    this.router.navigate(['/testo', id])
  }

}
