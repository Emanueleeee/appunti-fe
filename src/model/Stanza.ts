import { Prenotazione } from "./Prenotazione";
import { Tipologia } from "./Tipologia";

export class Stanza {
    constructor(
      public id: number,
      public numeroStanza: number,
      public tipologia: Tipologia,
      public listaPrenotazioni?:Prenotazione[]
    ) {}
}
