import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

import { Appunti    } from 'src/app/model/appunti';
import { RepoAppunti    } from 'src/app/repositories/repoappunti';
import { User } from '../model/User';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  appunti:Appunti[]=[]
  user:User= this.token.getUser()

  content: string;

  constructor(
    private userService: UserService,
    public repoAppunti:RepoAppunti,
    public token:TokenStorageService) { }
  constructor(private userService: UserService, public router:Router) { }


  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }),
      this.repoAppunti.listaAppuntiUtente(this.user.id).subscribe(x=>{this.appunti=x})
      
  }
  

  aggiungiAppunto(){
    this.router.navigate(['/appunti']);
  }

}
