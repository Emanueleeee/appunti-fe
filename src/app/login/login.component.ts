import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/model/Utente';
import { RepoUtente } from 'src/repositories/RepoUtente';
import { utenteLogged } from 'src/Utente/utenteLogged';
import { Validazione } from 'src/validazione/validazione';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  newUtente = new Utente(0, "", "",false,"","","" );
  msg: string = "";
  b!: Boolean
  invalidaPassword="XXX"
  constructor(public repoUtente: RepoUtente,
    public logged: utenteLogged,
    public router:Router) { }

  ngOnInit(): void {
  }


  login() {
    this.repoUtente.login(this.newUtente).subscribe(x=>{
      if(x.id==0){
        this.msg="Credenziali sbagliate"
      }
      else {
        this.logged.u.nome=x.nome
        this.logged.u.cognome=x.cognome
        this.logged.u.email=x.email
        this.logged.u.gestore=x.gestore
        this.logged.u.id=x.id
        this.logged.u.username=x.username
        this.logged.u.listaPrenotazioni=x.listaPrenotazioni
        this.logged.msg="SEI LOGGATO COME: " + this.logged.u.username

        this.logged.logged=true
        this.router.navigate(['/home'])
        if(x.gestore==true)
          this.router.navigate(['/paginaUtente'])
        else
        this.router.navigate(['/home'])
      }


    });
  }


}
