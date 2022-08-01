import { Appunti } from "./Appunti";

export class User{
 
    constructor(public id:Number,
        public username:String,
        public email:String,
        public password:String,
        public listaAppunti?:Appunti[]){}
}