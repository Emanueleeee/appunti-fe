import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from './_services/token-storage.service';
import { EventBusService } from './_shares/event-bus.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  private roles: string[]=[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string="";
  eventBusSub?: Subscription;

  constructor(private tokenStorageService: TokenStorageService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }
  ngOnDestroy(): void {
    if (this.eventBusSub)

      this.eventBusSub.unsubscribe();
  }
  logout(): void{
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    window.location.assign("/login");
  
  }
  
  isLogged(): Boolean {
    return this.isLoggedIn;
  }
 
}
