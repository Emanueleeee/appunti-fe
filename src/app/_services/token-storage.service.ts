import { Injectable } from '@angular/core';
import { User } from '../model/User';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  //Access Token
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    const user = this.getUser();
    if(user.id){
      this.saveUser({...user, accessToken:token});
    }
  }

  public getToken(): string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  //Refresh Token
  public saveRefreshToken(refreshtoken: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, refreshtoken);
  }

  public getRefreshToken(): string | null{
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }
  //Utente tramite token
  public saveUser(user:User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user){
      return JSON.parse(sessionStorage.getItem(USER_KEY)!);
    }
    return {};
  }
}
