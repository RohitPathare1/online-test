import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { asyncValidator } from '../helper/helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  contactForm: FormGroup;
  countryCode: string = '+91'
  constructor(private fb: FormBuilder, private router: Router) {
    
    this.contactForm = this.fb.group({
      firstName: ['', asyncValidator, Validators.required, Validators.max(20)],
      lastName: ['', asyncValidator, Validators.required, Validators.max(20)],
      email: ['', asyncValidator, Validators.required, Validators.email],
      phoneNumber: this.fb.group({
        countryCode: ['+91', asyncValidator],
        value: ['', asyncValidator, Validators.required, Validators.minLength(5), Validators.maxLength(15)]
      })
    });
  }
  Login() {
    if (this.contactForm) {
      console.log(this.contactForm.value);
    }
  }
  goToLogin() {
    this.router.navigate(['/login'])
  }
  countryCodeChange(event: any) {
    if (event.target.value) {
      console.log(event.target.value)
    }
  }
}
