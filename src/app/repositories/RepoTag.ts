import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tag } from "../model/Tag";
import { AppuntiService } from "../_services/appunti.service";


@Injectable({
    providedIn: 'root'
  })
export class RepoTag {

    constructor(public appuntiService: AppuntiService){}
    
    findByName(nameTag:string):Observable<Tag>{
      return this.appuntiService.findByName(nameTag);
    }
}
