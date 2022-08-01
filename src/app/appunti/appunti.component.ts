import { Component, OnInit } from '@angular/core';
import { Appunti } from '../model/Appunti';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';
import { User } from '../model/User';

@Component({
  selector: 'app-appunti',
  templateUrl: './appunti.component.html',
  styleUrls: ['./appunti.component.css']
})
export class AppuntiComponent implements OnInit {

  tags:Tag[]=[];
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), this.tags);

  constructor(private user: TokenStorageService, public repoAppunti:RepoAppunti) { }

  ngOnInit(): void {
  }

  aggiungiAppunto(){
    this.appunto.user = this.user.getUser()
    this.repoAppunti.nuovoAppunto(this.appunto).subscribe();
  }

}
