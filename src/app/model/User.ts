import { Appunti } from "./Appunti";

import { Role } from "./Role";


export class User{
 
    constructor(public id:number,
        public username:string,
        public email:string,
        public password:string,

        public roles:Role[]=[],
        public listaAppunti?:Appunti){}
        
}