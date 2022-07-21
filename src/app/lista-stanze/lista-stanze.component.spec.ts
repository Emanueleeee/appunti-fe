import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaStanzeComponent } from './lista-stanze.component';

describe('ListaStanzeComponent', () => {
  let component: ListaStanzeComponent;
  let fixture: ComponentFixture<ListaStanzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaStanzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaStanzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
