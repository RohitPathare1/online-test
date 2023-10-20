import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  contactForm: FormGroup;
  showPassword: boolean = false
  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required, Validators.max(20)],
      lastName: ['', Validators.required, Validators.max(20)],
      email: ['', Validators.required, Validators.email],
      phoneNumber: ['', Validators.required, Validators.max(12), Validators.min(10)]
    });
  }
  Login() {
    console.log(this.contactForm);
    this.router.navigate(['/home/dashboard'])

  }
  goToSignUP() {
    this.router.navigate(['/signup'])
  }
}
