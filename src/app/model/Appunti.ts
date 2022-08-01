import { User } from "./User";
import { BaseEntity } from "./BaseEntity";
import { Tag } from "./Tag";

export class Appunti extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public titolo:String,
      public sottotitolo:String,
      public testo:String,
      public user:User,
      public tags:Tag[]

    ){
        super(baseEntity.id,baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }