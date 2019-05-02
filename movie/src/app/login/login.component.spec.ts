import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('text input should exist for email ', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1;
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('.email').length;
    //assert
  
    expect(actual).toEqual(expected);
    //teardown
  });

  it('text input should exist for password ', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1;
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('.password').length;
    //assert
  
    expect(actual).toEqual(expected);
    //teardown
  });

  it('Login button should exist', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1; //1 or more
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('input[type=submit]').length;
    //assert
    expect(actual).toEqual(expected);
    expect(fixture.elementRef.nativeElement.querySelector('input[type=submit]')).toBeTruthy();
    //teardown
  });

});
