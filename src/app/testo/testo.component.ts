import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appunti } from '../model/Appunti';
import { BaseEntity } from '../model/BaseEntity';
import { Tag } from '../model/Tag';
import { User } from '../model/User';
import { RepoAppunti } from '../repositories/RepoAppunti';

@Component({
  selector: 'app-testo',
  templateUrl: './testo.component.html',
  styleUrls: ['./testo.component.css']
})
export class TestoComponent implements OnInit {

  idAppunto:number=0;
  listaTags:Tag[]=[]
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), false, this.listaTags);

  constructor(public route:ActivatedRoute, public repoAppunti:RepoAppunti) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.idAppunto= + (params.get('id') + '') })
  }

  appuntoById(){
    this.repoAppunti.appuntoById(this.idAppunto).subscribe(x=>{this.appunto=x});
  }
}
