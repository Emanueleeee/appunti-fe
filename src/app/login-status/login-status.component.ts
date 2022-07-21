import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/model/Utente';
import { utenteLogged } from 'src/Utente/utenteLogged';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  newUtente = new Utente(0, "", "",false,"","","" );
  public msg:string="";
  public status:Boolean=false;
  constructor(public logged:utenteLogged, public router:Router) { }

  ngOnInit(): void {
    
  }

  logout(){ 
    this.logged.logged=false
    this.router.navigate(['/home'])
  }
 
}
