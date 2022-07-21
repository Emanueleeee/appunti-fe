
import { Prenotazione } from "./Prenotazione";

export class Ospite{
  constructor(
    public id:number,
    public documento:string,
    public nome:string,
    public cognome:string,
    public indirizzo:string,
    public listaPrenotazioni?:Prenotazione[]
  ){

  }
}
