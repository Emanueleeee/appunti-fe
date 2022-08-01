import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appunti } from '../model/Appunti';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppuntiService {

  url: string = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  nuovoAppunto(appunto:Appunti):Observable<Appunti>{
    return this.http.post<Appunti>(this.url+'/salvaAppunti',appunto);
  }
}
