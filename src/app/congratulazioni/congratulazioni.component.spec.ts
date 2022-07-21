import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulazioniComponent } from './congratulazioni.component';

describe('CongratulazioniComponent', () => {
  let component: CongratulazioniComponent;
  let fixture: ComponentFixture<CongratulazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongratulazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
