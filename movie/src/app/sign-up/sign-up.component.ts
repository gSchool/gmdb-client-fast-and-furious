import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formSignup:FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {

   }

  ngOnInit() {
    this.formSignup = this.fb.group({
      name:['', [Validators.required,Validators.maxLength(20)]],
      phoneNumber:['',[Validators.maxLength(10)]],
      email:['' ,[Validators.required,Validators.email]],
      password:['' ,[Validators.required,Validators.minLength(6)]]
    })
  }

  signup(){
    if(this.formSignup.valid){
      
      let {name,phoneNumber,email,password} = this.formSignup.value;
      localStorage.setItem(email,JSON.stringify({name,password,phoneNumber}))
     
      this.router.navigateByUrl(`/login`);
      
    }

}
}
