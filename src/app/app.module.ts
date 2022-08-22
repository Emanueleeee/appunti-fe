import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AppuntiComponent } from './appunti/appunti.component';
import { RouterModule } from '@angular/router';
import { CongratulazioniComponent } from './congratulazioni/congratulazioni.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    AppuntiComponent,
    CongratulazioniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'appunti',component:AppuntiComponent},
      {path:'home',component:HomeComponent},
      {path: 'appunti/:cod', component:AppuntiComponent},
      {path:'boardUser',component:BoardUserComponent},
      {path: 'listaAppunti', component:AppuntiComponent},
      {path: 'Congratulazioni', component:CongratulazioniComponent} 
    ]),
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
