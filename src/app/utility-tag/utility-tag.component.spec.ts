import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityTagComponent } from './utility-tag.component';

describe('UtilityTagComponent', () => {
  let component: UtilityTagComponent;
  let fixture: ComponentFixture<UtilityTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
