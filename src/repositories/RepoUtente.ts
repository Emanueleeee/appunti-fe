import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utente } from "src/model/Utente";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
    providedIn: 'root'
  })
export class RepoUtente{

    constructor(
        public srvHTTPService: SrvHttpServiceService
    ) { }

    login(utente:Utente):Observable<Utente>
    {
        return this.srvHTTPService.accesso(utente);
    }
    registrazione(utente:Utente):Observable<Boolean>{

        return this.srvHTTPService.registrazione(utente)
    }
    //getUtentePrenotazione(id: number) {
       // return this.srvHTTPService.getUtentePrenotazione(id);
      //}

}
