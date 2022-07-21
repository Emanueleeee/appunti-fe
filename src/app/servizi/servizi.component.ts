import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Servizio } from 'src/model/Servizio';
import { RepoServizio } from 'src/repositories/RepoServizio';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css']
})
export class ServiziComponent implements OnInit {
  @Output() newItemEvent=new EventEmitter<Servizio[]>()
  @Input('arrServizi')
  ServiziFigli:Servizio[]=[];
  Servizi:Servizio[]=[]
  ServiziScelti!:Servizio[]
  constructor(public repoServizio:RepoServizio) { }

  ngOnInit(): void {
    this.listaServizi()
    this.ServiziScelti=[]
  }
  listaServizi(){
    this.repoServizio.listaServizi().subscribe(x=>{this.Servizi=x;});
  }
  ConfermaServizi(){

    this.newItemEvent.emit(this.ServiziScelti)
  }
  

  OnChange(Ser:Servizio, event :any){

    if(event.target.checked){
      this.ServiziScelti.push(Ser)
    }
    else if(!event.target.checked){
      this.ServiziScelti.splice(this.ServiziScelti.findIndex(x=>{x.id==Ser.id}))
    }
  }

}
