import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Prenotazione } from "src/model/Prenotazione";
import { Stanza } from "src/model/Stanza";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
    providedIn: 'root'
  }) 
export class RepoStanza {
   

    constructor(

        public srvHTTPService: SrvHttpServiceService
    ) { }
    ricercaStanzaPerTipologia(prenotazione:Prenotazione):Observable<Stanza[]>{
        return this.srvHTTPService.ricercaStanzaPerTipologia(prenotazione)
    }
    //getStanzaPrenotazione(id: number) {
        //return this.srvHTTPService.getStanzaPrenotazione(id);
      //}
}