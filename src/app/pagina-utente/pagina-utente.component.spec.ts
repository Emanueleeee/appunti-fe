import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUtenteComponent } from './pagina-utente.component';

describe('PaginaUtenteComponent', () => {
  let component: PaginaUtenteComponent;
  let fixture: ComponentFixture<PaginaUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaUtenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
