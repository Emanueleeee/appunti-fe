import { Component, Input, OnInit } from '@angular/core';
import { utenteLogged } from 'src/Utente/utenteLogged';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public logged:utenteLogged) { }

  ngOnInit(): void {
    
  }

}
