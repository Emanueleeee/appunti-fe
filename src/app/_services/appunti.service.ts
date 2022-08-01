import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Appunti } from '../model/Appunti';

import { Observable } from 'rxjs';
import { Appunti} from 'src/app/model/Appunti';

@Injectable({
  providedIn: 'root'
})

export class AppuntiService {

  url: string = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  nuovoAppunto(appunto:Appunti):Observable<Appunti>{
    return this.http.post<Appunti>(this.url+'/salvaAppunti',appunto);
  listaAppunti():Observable<Appunti[]>{
    return this.http.get<Appunti[]>(this.url+'/listaAppunti')
  }
}
