import { Component } from '@angular/core';
import { LoginService } from './loginService';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }
  private username;
  private password;

  validateUser() {
    if (this.loginService.ValidateUser(this.username, this.password)) {
      this.router.navigateByUrl('/dashboard');
    }
    else {
      this.router.navigate(['/pages/login']);
    }
  }

}
