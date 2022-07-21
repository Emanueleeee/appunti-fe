import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPortableComponent } from './login-portable.component';

describe('LoginPortableComponent', () => {
  let component: LoginPortableComponent;
  let fixture: ComponentFixture<LoginPortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPortableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
