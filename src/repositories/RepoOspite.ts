import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ospite } from "src/model/Ospite";
import { Prenotazione } from "src/model/Prenotazione";
import { SrvHttpServiceService } from "src/services/srv-http-service.service";

@Injectable({
    providedIn: 'root'
  })
export class RepoOspite {


    constructor(

        public srvHTTPService: SrvHttpServiceService
    ) { }
    //NuoviOspiti(Ospiti:Ospite[]){

      //return this.srvHTTPService.nuoviOspiti(Ospiti)
  //}
  //listaOspitiByPreno(id:number) {
    //return this.srvHTTPService.listaOspitiByPreno(id);
  //}
  findByDocumento(documento:string){
    return this.srvHTTPService.findOspiteByDocumento(documento)
  }
}
