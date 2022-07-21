import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipologiaComponent } from './lista-tipologia.component';

describe('ListaTipologiaComponent', () => {
  let component: ListaTipologiaComponent;
  let fixture: ComponentFixture<ListaTipologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipologiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
