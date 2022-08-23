import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appunti    } from 'src/app/model/Appunti';
import { Tag } from '../model/Tag';


@Injectable({
  providedIn: 'root'
})

export class AppuntiService {
  url: string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  //lista di appunti per utente
  AppuntiPerUtente(id:number):Observable<Appunti[]>{
  return this.http.post<Appunti[]>(this.url+"/listaAppuntiUtente",id);

  }

  nuovoAppunto(appunto:Appunti):Observable<Appunti>{
    return this.http.post<Appunti>(this.url+'/salvaAppunti',appunto);
  }
  listaAppunti():Observable<Appunti[]>{
    return this.http.get<Appunti[]>(this.url+'/listaAppunti')
  }
  cancellaAppunti(appunto:Appunti):Observable<Appunti[]>{
    return this.http.post<Appunti[]>(this.url+'/cancellaAppunti',appunto);
  }
  listaAppuntiPub(pub:boolean):Observable<Appunti[]>{
    return this.http.post<Appunti[]>(this.url+'/listaAppuntiPub', pub);
  }
  appuntoById(id:number):Observable<Appunti>{
    return this.http.post<Appunti>(this.url+'/appuntoById', id);
  }
  
  //Metodi Tag
  findByName(nameTag:string):Observable<Tag>{
    return this.http.post<Tag>(this.url+'/cercaTag', nameTag);
  }
}
