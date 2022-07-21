import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ospite } from "src/model/Ospite";
import { Prenotazione } from "src/model/Prenotazione";
import { Servizio } from "src/model/Servizio";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
    providedIn: 'root'
  })
export class RepoServizio {


    constructor(

        public srvHTTPService: SrvHttpServiceService
    ) { }
    listaServizi():Observable<Servizio[]>{

      return this.srvHTTPService.listaServizi()
  }
  //listaServiziByPreno(id:number) {
    //return this.srvHTTPService.listaServiziByPreno(id);
  //}
}
