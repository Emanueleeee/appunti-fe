export class BaseEntity {
    constructor(
      public dataCreazione:Date,
      public dataModifica:Date,
      public utenteCreazione:String,
      public utenteModifica: String
    ){}
}