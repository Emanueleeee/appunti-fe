import { Injectable } from "@angular/core";

import { Router } from "@angular/router";
import { AppuntiService } from "src/app/_services/appunti.service";
import { Appunti    } from 'src/app/model/appunti';
import { User       } from 'src/app/model/User';
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
    }

    nuovoAppunto(appunto:Appunti){
        return this.serviceAppunti.nuovoAppunto(appunto);
    }
    listaAppunti():Observable<Appunti[]>{
    return this.serviceAppunti.listaAppunti();
    }
    cancellaAppunti(appunto:Appunti){
      return this.serviceAppunti.cancellaAppunti(appunto);
    }
}
