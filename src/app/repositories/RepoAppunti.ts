import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { AppuntiService } from "src/app/_services/appunti.service";
import { Appunti    } from 'src/app/model/appunti';
import { User       } from 'src/app/model/User';
import { Observable } from "rxjs";
=======
import { AppuntiService } from '../_services/appunti.service';
import { Appunti } from '../model/Appunti';

import { Observable } from "rxjs";





@Injectable({
    providedIn: 'root'
  })
export class RepoAppunti {
  arrAppunti:Appunti[]=[]



    constructor(
      public serviceAppunti:AppuntiService,
      public router:Router
    ){}

    ngOnInit(): void {
      
      
    }

    listaAppuntiUtente(id:number){
     return this.serviceAppunti.AppuntiPerUtente(id)


    constructor(public appuntiService: AppuntiService){}

    nuovoAppunto(appunto:Appunti){
        return this.appuntiService.nuovoAppunto(appunto);
    }
    listaAppunti():Observable<Appunti[]>{
    return this.appuntiService.listaAppunti();

    }
}
