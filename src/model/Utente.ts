
import { Prenotazione } from "./Prenotazione";

export class Utente {
    constructor(
      public id: number,
      public username: string,
      public password: string,
      public gestore: boolean,
      public cognome: string,
      public email: string,
      public nome: string,
      public listaPrenotazioni?:Prenotazione[]
      
    ) {}
}
