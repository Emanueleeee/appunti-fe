import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { Appunti } from '../model/Appunti';
import { BaseEntity } from '../model/BaseEntity';
import { Tag } from '../model/Tag';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { RepoTag } from '../repositories/RepoTag';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';
import { RepoAppunti } from '../repositories/RepoAppunti';


@Component({
  selector: 'app-utility-tag',
  templateUrl: './utility-tag.component.html',
  styleUrls: ['./utility-tag.component.css']
})
export class UtilityTagComponent implements OnInit {

  @Output() passoListaTag = new EventEmitter<Tag[]>()

  listaTags:Tag[]=[]
  @Input ('idAppunto')
  idAppunto!:number

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

  constructor(public repoAppunti:RepoAppunti, public router:Router, public route:ActivatedRoute, public repoTag:RepoTag) {
    this.listaTuttiTag();
    this.filteredTag = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => (tag ? this._filter(tag) : this.tuttiTag.slice())),
    );
  }

  ngOnInit(): void {
  }

  rimuovi(tag: Tag): void {
    const index = this.listaTags.indexOf(tag);

    if (index >= 0) {
      this.listaTags.splice(index, 1);
    }
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // aggiungi tag
    if (value) {
      this.listaTags.push({name: value});
    }

    // pulisce il valore nell'input
    event.chipInput!.clear();
    this.tagCtrl.setValue(null);
    this.addNewItem();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tag.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    let newTag = new Tag(event.option.viewValue);
    this.listaTags.push(newTag)
    this.addNewItem();
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

  addNewItem() {
    
    this.passoListaTag.emit(this.listaTags);
  }

  listaTagUtente(){
    if(this.idAppunto){
      this.repoAppunti.appuntoById(this.idAppunto).subscribe(x=>{this.appunto=x})
    }
    this.listaTags=this.appunto.listaTag;
    return this.listaTags;
  }
}
