import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tipologia } from 'src/model/Tipologia';
import { RepoTipologia } from 'src/repositories/RepoTipologia';

@Component({
  selector: 'app-lista-tipologia',
  templateUrl: './lista-tipologia.component.html',
  styleUrls: ['./lista-tipologia.component.css']
})
export class ListaTipologiaComponent implements OnInit {
  arrTipologia:Tipologia[]=[]
  
  constructor(public repoTipologia:RepoTipologia, public router:Router) { }

  ngOnInit(): void {
    this.listaTipologia()
  }
  dettagli(id:number){
    this.router.navigate(['/listaStanze',id])
  }

  listaTipologia(){
    this.repoTipologia.listaTipologia().subscribe(x=>{this.arrTipologia=x;});
  }
}
