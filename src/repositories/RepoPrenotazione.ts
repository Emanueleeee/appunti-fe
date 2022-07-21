import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Prenotazione } from "src/model/Prenotazione";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
  providedIn: 'root'
})
export class RepoPrenotazione {
  
  constructor(

    public srvHTTPService: SrvHttpServiceService
  ) { }
  NuovaPrenotazione(P: Prenotazione) {

    return this.srvHTTPService.nuovaPrenotazione(P)
  }
  getPrenotazioniUtente(id: Number) {
    
    return this.srvHTTPService.getPrenotazioniUtente(id);   
  }

  listaPrenotazioni():Observable<Prenotazione[]>{
    return this.srvHTTPService.listaPrenotazioni()
  }
  getPrenotazione(idPreno: number) {
    return this.srvHTTPService.getPrenotazione(idPreno);
  }
  cancellaPrenotazione(prenotazione: Prenotazione) {
    return this.srvHTTPService.cancellaPrenotazione(prenotazione)
  }
}
