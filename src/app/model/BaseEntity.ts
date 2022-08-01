export class BaseEntity {
    constructor(
      public dataCreazione:Date,
      public dataModifica:Date,
      public utenteCreazione:string,
      public utenteModifica: string
    ){}
}