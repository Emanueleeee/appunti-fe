import { Prenotazione } from "./Prenotazione";

export class Servizio{
    constructor(
        public id:number,
        public descrizione:string,
        public listaPrenotazioni:Prenotazione[]
    ){}
}
