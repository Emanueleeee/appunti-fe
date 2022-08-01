export class BaseEntity {
    constructor(
      public id:number,
      public dataCreazione:Date,
      public dataModifica:Date,
      public utenteCreazione:string,
      public utenteModifica: string
    ){}
}