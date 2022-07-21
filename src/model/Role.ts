import { AppUser } from "./AppUser";
import { BaseEntity } from "./BaseEntity";

export class Role extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public name:String,
      public appUser:AppUser
      
    ){
        super(baseEntity.id,baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }