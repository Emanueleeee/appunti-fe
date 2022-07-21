import { Ospite } from "./Ospite";
import { Servizio } from "./Servizio";
import { Stanza } from "./Stanza";
import { Utente } from "./Utente";

export class Prenotazione{
    constructor(
        public id:number,
        public dataInizio:Date,
        public dataFine:Date,
        public stanza:Stanza,
        public listaOspiti:Ospite[],
        public listaServizi:Servizio[],
        public utente:Utente
    ){}
}
