import { Appunti } from "./Appunti";
import { AppUser } from "./AppUser";
import { BaseEntity } from "./BaseEntity";

export class Tag extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public descrizione:String,
      public Appunti:Appunti
      
    ){
        super(baseEntity.id,baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }