
import { Stanza } from "./Stanza";

export class Tipologia {
    
    constructor(public id:number,
                public descrizione:string,
                public capienza:number,
                public stanze?:Stanza[],
                
                ){}
}
