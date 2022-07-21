import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utente } from "src/model/Utente";
import { RepoUtente } from "src/repositories/RepoUtente";



@Injectable({providedIn:'root'})
export class utenteLogged {
    logged:boolean=false
    msg:string="";
    u:Utente = new Utente(0, "", "",false,"","","" );
    constructor(
      public repoUtente:RepoUtente
    ){
    }
    ngOnInit(){


    }

    getLogged():Utente{
      return this.u;
    }
    isLogged():Boolean{
      return this.logged
    }

}
