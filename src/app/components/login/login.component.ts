import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/model';
import { EngineService } from 'src/app/services/engine.service';
import { asyncValidator } from '../helper/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  contactForm: FormGroup;
  showPassword: boolean = false
  constructor(private fb: FormBuilder, private router: Router, private engine: EngineService) {
    this.contactForm = this.fb.group({
      userName: ['', asyncValidator, Validators.required, Validators.email],
      password: ['', asyncValidator, Validators.required,],
    });
  }
  Login() {
    this.engine.login(this.contactForm.value).then((result: Result) => {
      if (result.success) {

        this.router.navigate(['/home/dashboard'])
      }
    })

  }
  goToSignUP() {
    this.router.navigate(['/signup'])
  }
}
