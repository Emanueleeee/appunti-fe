import { User } from "./User";
import { BaseEntity } from "./BaseEntity";
import { Tag } from "./Tag";

export class Appunti extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public id:number,
      public titolo:String,
      public sottotitolo:String,
      public testo:String,
      public user:User,
      public listaTag:Tag[]

    ){
        super(baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }