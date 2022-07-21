import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from 'src/model/Utente';
import { Observable } from 'rxjs';
import { Tipologia } from 'src/model/Tipologia';
import { Stanza } from 'src/model/Stanza';
import { Prenotazione } from 'src/model/Prenotazione';
import { Ospite } from 'src/model/Ospite';
import { Servizio } from 'src/model/Servizio';

@Injectable({
  providedIn: 'root'
})
export class SrvHttpServiceService {

  url: string = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  //Metodi Utente
  accesso(utente:Utente):Observable<Utente>
  {
    return this.http.post<Utente>(this.url+'/login',utente);
  }

  registrazione(utente:Utente):Observable<Boolean>{

    return this.http.post<Boolean>(this.url+'/registrazione',utente)
  }
  //getUtentePrenotazione(id: number):Observable<Utente> {
   // return this.http.post<Utente>(this.url+'/getUtentePrenotazione', id);
//}

  //Metodi Tipologia
  listaTipologia():Observable<Tipologia[]>{
    return this.http.get<Tipologia[]>(this.url+'/listaTipologia');
  }
  trovaTipologiaByid(id:number):Observable<Tipologia>{
    return this.http.post<Tipologia>(this.url+'/trovaTipologia',id)
  }
 // getTipologiaXStanza(id:number):Observable<Tipologia>{
   // return this.http.post<Tipologia>(this.url+'/getTipologiaXStanza',id)
  //}



  //Metodi Stanza
  ricercaStanzaPerTipologia(prenotazione:Prenotazione):Observable<Stanza[]>{
    return this.http.post<Stanza[]>(this.url+'/listaStanze', prenotazione)
  }
  //getStanzaPrenotazione(id: number) {
    //return this.http.post<Stanza>(this.url+'/getStanzaPrenotazione', id);
//}
  //Metodi Prenotazione
  nuovaPrenotazione(P:Prenotazione){
    return this.http.post<Prenotazione>(this.url+'/prenotazione',P)
  }
  getPrenotazioniUtente(id: Number):Observable<Prenotazione[]> {
    return this.http.post<Prenotazione[]>(this.url+'/prenotazioniUtente', id);
  }
  listaPrenotazioni():Observable<Prenotazione[]>{
    return this.http.get<Prenotazione[]>(this.url+'/listaPrenotazioni')
  }
  getPrenotazione(idPreno: number):Observable<Prenotazione> {
   return this.http.post<Prenotazione>(this.url+'/getPrenotazione', idPreno);
  }
  cancellaPrenotazione(prenotazione: Prenotazione) {
    return this.http.post<Boolean>(this.url+'/cancellaPrenotazione', prenotazione);
  }


  //Metodi Ospiti
  nuoviOspiti(O: Ospite[]):Observable<Ospite[]> {
    return this.http.post<Ospite[]>(this.url+'/ospiti', O)
  }
  //listaOspitiByPreno(id:number) {
   // return this.http.post<Ospite[]>(this.url+'/listaOspitiByPreno', id)
 // }
  findOspiteByDocumento(documento:string){
    return this.http.post<Ospite>(this.url+'/findOspiteByDocumento',documento)
  }

  //Metodi Servizi
  listaServizi():Observable<Servizio[]> {
    return this.http.get<Servizio[]>(this.url+'/servizi')
  }
  //listaServiziByPreno(id:number) {
   // return this.http.post<Servizio[]>(this.url+'/listaServiziByPreno', id)
  //}


}
