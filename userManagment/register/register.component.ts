import { Component, OnInit } from '@angular/core';
import {UserManagementService} from '../../_services/user-managment/user-management.service';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isWrongCredentials = false;
  serverErrorMessage:string;
  constructor(private userManagement: UserManagementService, private cookieService: CookieService, private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
  }

  register(email:string, password:string){
    this.userManagement.register(email, password).subscribe(
      (data) => {
        let idToken = data.token;
        if(idToken){
          this.cookieService.set( 'idToken', idToken );
          this.router.navigate(['']);

        }
      },
      (err) => {
        this.serverErrorMessage = err.error.error;
        this.isWrongCredentials = true;      }
    );
  }

}
