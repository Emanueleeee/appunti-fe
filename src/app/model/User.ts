import { Appunti } from "./Appunti";

import { Role } from "./Role";


export class User{
 
    constructor(public id:Number,
        public username:String,
        public email:String,
        public password:String,

        public roles:Role[]=[],
        public listaAppunti?:Appunti){}
        
}