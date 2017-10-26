import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  signUpForm:FormGroup;
  constructor(private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.loginForm = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl()
    });

    this.signUpForm=this._fb.group({
       firstName: new FormControl(),
        lastName: new FormControl(),
         remail: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl()
    });
  }

 login(){
   console.log('login here '+this.loginForm.get('email').value);
    this.router.navigate(['/home']); 
}

 signUp(){
     console.log('Signup firstName '+this.signUpForm.get('firstName').value);
     console.log('Signup lastName '+this.signUpForm.get('lastName').value);
     console.log('Signup remail '+this.signUpForm.get('remail').value);
     console.log('Signup email '+this.signUpForm.get('email').value);
 }

}
