import { Component, OnInit } from '@angular/core';
import { Appunti } from '../model/Appunti';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;
  arrAppunti:Appunti[]=[]

  constructor(private userService: UserService, public repoAppunti:RepoAppunti) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.repoAppunti.listaAppunti().subscribe(x=>{this.arrAppunti=x;});
    console.log(this.arrAppunti)
  }

}
