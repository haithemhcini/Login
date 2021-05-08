import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isEmail = false
  form: any = {
    username: null,
    password: null,

  };
  admin = "haithemhcini@gmail.com";
  pass = "123456"
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    if (this.form.username == this.admin && this.form.password == this.pass) {
      this.router.navigate(['/home']);
      console.log("Login Success");
    }
    else {
      console.log("Login Failed");
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
  logi() {
    if (this.form.username == this.admin && this.form.password == this.pass) {
      this.isEmail = true
      console.log(this.isEmail)
    }

  }
}
