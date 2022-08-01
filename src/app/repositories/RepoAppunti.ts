import { Injectable } from "@angular/core";
import { AppuntiService } from '../_services/appunti.service';
import { Appunti } from '../model/Appunti';

import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
  })
export class RepoAppunti {


    constructor(public appuntiService: AppuntiService){}

    nuovoAppunto(appunto:Appunti){
        return this.appuntiService.nuovoAppunto(appunto);
    }
    listaAppunti():Observable<Appunti[]>{
    return this.appuntiService.listaAppunti();
    }
}
