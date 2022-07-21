import { BaseEntity } from "./BaseEntity";
import { Role } from "./Role";

export class AppUser extends BaseEntity {
    constructor(
      baseEntity:BaseEntity,
      public username:String,
      public password:String,
      public name:String,
      public role:Role[]
      

    ){
        super(baseEntity.id,baseEntity.dataCreazione,baseEntity.dataModifica,baseEntity.utenteCreazione,baseEntity.utenteModifica);
    }
  
    }