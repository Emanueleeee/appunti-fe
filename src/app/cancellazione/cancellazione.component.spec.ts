import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellazioneComponent } from './cancellazione.component';

describe('CancellazioneComponent', () => {
  let component: CancellazioneComponent;
  let fixture: ComponentFixture<CancellazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
