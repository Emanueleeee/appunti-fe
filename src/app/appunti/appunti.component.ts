import { Component, OnInit } from '@angular/core';

import { Appunti } from '../model/Appunti';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-appunti',
  templateUrl: './appunti.component.html',
  styleUrls: ['./appunti.component.css']
})
export class AppuntiComponent implements OnInit {
idAppunto:number=0

  tags:Tag[]=[];
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), this.tags);

  constructor(private user: TokenStorageService, public repoAppunti:RepoAppunti, public router:Router, public route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.idAppunto= + (params.get('cod') + '') })
  }

  aggiungiAppunto(){
    this.appunto.user = this.user.getUser();
    this.appunto.user.roles = this.user.getUser().role;
    this.appunto.id=this.idAppunto
    this.repoAppunti.nuovoAppunto(this.appunto).subscribe();
    this.router.navigate(['/Congratulazioni']);
  }
  cancellaAppunti(){
  this.repoAppunti.cancellaAppunti(this.appunto).subscribe();
  this.router.navigate(['/Congratulazioni']);
  }

}
