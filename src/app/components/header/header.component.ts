import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
isCollapsed: any;
constructor(private router: Router){}
goToLogin() {
  this.router.navigate(['/login'])
}
}
