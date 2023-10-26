import { Injectable } from '@angular/core';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Result } from '../models/model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/env/env';
import { Callout } from '../helper/callout';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  callout: Callout;

  constructor(public cookie: CookieService, public router: Router) {
    this.callout = new Callout(environment.baseURL);
  }
  async register(user: any): Promise<Result> {
    let payload = { user }
    return await this.callout.post('user/register', payload, true);
  }
  async login(user: any): Promise<Result> {
    let result: Result = await this.callout.post('auth/login', user, true);
    this.cookie.deleteAll();
    if (result.success && !result.data.isCodeRequired) {
      this.cookie.set('sid', result.data.sid);
      this.cookie.set('sidExpiresOn', result.data.expiresOn);
      this.cookie.set('lastLogInUser', user.email as string);
    }
    return result;
  }
}
