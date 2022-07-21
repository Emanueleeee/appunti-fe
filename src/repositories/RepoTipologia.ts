import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tipologia } from "src/model/Tipologia";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
    providedIn: 'root'
  })
export class RepoTipologia{
    trovaTipologia(id: number):Observable<Tipologia> {
      return this.srvHTTPService.trovaTipologiaByid(id)
    }

    constructor(
        public srvHTTPService: SrvHttpServiceService
    ) { }

    listaTipologia():Observable<Tipologia[]>{
       return this.srvHTTPService.listaTipologia();
    }
    //getTipologiaXStanza(id:number):Observable<Tipologia>{
     // return this.srvHTTPService.getTipologiaXStanza(id);
    //}

}
