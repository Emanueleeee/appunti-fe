import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppuntiService } from "src/app/_services/appunti.service";
import { Appunti } from "../model/Appunti";



@Injectable({
    providedIn: 'root'
  })
export class RepoAppunti {


    constructor( public appuntiService:AppuntiService

    ){}
    listaAppunti():Observable<Appunti[]>{
    return this.appuntiService.listaAppunti();
    }
}
