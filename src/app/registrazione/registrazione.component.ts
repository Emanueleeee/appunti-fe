import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from 'src/model/Utente';
import { RepoUtente } from 'src/repositories/RepoUtente';
import { Validazione } from 'src/validazione/validazione';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  b!:Boolean;
  utente:Utente = new Utente(0, "", "",false,"","","" );
  str!: string[];
  msg:string = "";

  constructor(public repoUtente:RepoUtente, public router:Router) { }

  ngOnInit(): void {
  }

  registra() {
    this.msg=""
    console.log(this.utente)
    this.str = Validazione.validaUtente(this.utente);
    if (this.str.length == 0) {
      this.repoUtente.registrazione(this.utente).subscribe(x => {
        if(x==false){
          this.msg="Account già esistente"
        }
        else{
          this.utente  = new Utente(0, "", "",false,"","","");
          this.msg = "Account creato"
        }
      });
    }
  }

  login(){
    this.router.navigate(['/login'])
  }
}
