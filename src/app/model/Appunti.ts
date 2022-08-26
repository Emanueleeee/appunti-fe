import { User } from "./User";
import { BaseEntity } from "./BaseEntity";
import { Tag } from "./Tag";

export class Appunti extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public id:number,
      public titolo:string,
      public sottotitolo:string,
      public testo:string,
      public user:User,
      public pub:boolean,
      public listaTag:Tag[]

    ){
        super(baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }