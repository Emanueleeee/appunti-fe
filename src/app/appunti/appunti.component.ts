import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Appunti } from '../model/Appunti';
import { TokenStorageService } from '../_services/token-storage.service';
import { RepoAppunti } from '../repositories/RepoAppunti';
import { Tag } from '../model/Tag';
import { BaseEntity } from '../model/BaseEntity';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoTag } from '../repositories/RepoTag';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Validazione } from '../validazione/validazione';


@Component({
  selector: 'app-appunti',
  templateUrl: './appunti.component.html',
  styleUrls: ['./appunti.component.css']
})
export class AppuntiComponent implements OnInit {

  nTag:number = 1
  str!: string[];
  listaTags:Tag[]=[]
  baseEntity:BaseEntity = new BaseEntity(new Date(), new Date(), "","");
  appunto:Appunti = new Appunti(this.baseEntity,0,"","","",new User(0,"","",""), false, this.listaTags);
  statoApp:boolean=false;

  //variabili per le chips dei tag
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filteredTag!: Observable<string[]>;
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;
  tag:string[]=[];
  tagCtrl = new FormControl('');
  tuttiTag:string[]=[];

  constructor(private user: TokenStorageService, public repoAppunti:RepoAppunti, public router:Router, public route:ActivatedRoute, public repoTag:RepoTag) { 
    this.listaTuttiTag();
    this.filteredTag = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.tuttiTag.slice())),
    );
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => { this.appunto.id= + (params.get('cod') + '') })
    if(this.appunto.id){
      this.repoAppunti.appuntoById(this.appunto.id).subscribe(x=>{this.appunto=x})
    }
    
  }

  aggiungiAppunto(){
    this.appunto.user = this.user.getUser();
    this.appunto.user.roles = this.user.getUser().role;
    this.appunto.pub=false;
    this.appunto.utenteCreazione=this.appunto.user.username;
    this.appunto.utenteModifica=this.appunto.user.username;
    this.str = Validazione.validaAppunto(this.appunto);
    if (this.str.length == 0) {
      this.repoAppunti.nuovoAppunto(this.appunto).subscribe();
      this.statoApp=true;
      window.location.assign("/boardUser") 
    }
 
    
  }
  
  
  rimuovi(tag: Tag): void {
    const index = this.appunto.listaTag.indexOf(tag);

    if (index >= 0) {
      this.appunto.listaTag.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // aggiungi tag
    if (value) {
      this.appunto.listaTag.push({name: value});
    }

    // pulisce il valore nell'input
    event.chipInput!.clear();
    this.tagCtrl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tag.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    let newTag = new Tag(event.option.viewValue);
    this.appunto.listaTag.push(newTag)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tuttiTag.filter(tag => tag.toLowerCase().includes(filterValue));
  }
  listaTuttiTag(){
    this.repoTag.listaTuttiTag().subscribe(arrTag =>{
      arrTag.forEach(element => {
        this.tuttiTag.push(element.name)
      });
    });
  }
 
}
