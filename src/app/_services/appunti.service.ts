import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appunti    } from 'src/app/model/appunti';
import { User       } from 'src/app/model/user';


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
}
