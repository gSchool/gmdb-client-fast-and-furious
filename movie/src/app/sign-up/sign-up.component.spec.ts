import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule ],
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('text input should exist for name ', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1;
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('.name').length;
    //assert
  
    expect(actual).toEqual(expected);
    //teardown
  });

  it('text input should exist for phone number ', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1;
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('.phoneNumber').length;
    //assert
  
    expect(actual).toEqual(expected);
    //teardown
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

  it('signup button should exist', ()=>{
    //setup
    //exercise
      //expect
      let expected = 1; //1 or more
      //actual
      let actual = fixture.elementRef.nativeElement.querySelectorAll('input[type=submit]').length;
    //assert
    expect(actual).toBeGreaterThanOrEqual(expected);
    expect(fixture.elementRef.nativeElement.querySelector('input[type=submit]')).toBeTruthy();
    //teardown
  });

});
