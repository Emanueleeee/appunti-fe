import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';



@Injectable({ providedIn: 'root' })

export class utenteLogged {

  logged: boolean = false;

  msg: string = '';

  u: User = new User(0, '', '', "");

  constructor() {}

  ngOnInit() {}



  getLogged(): User {

    return this.u;

  }

  isLogged(): Boolean {

    return this.logged;

  }

}