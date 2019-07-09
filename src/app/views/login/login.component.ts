import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  LoginForm : FormGroup;
  user: any = {};
  isCheck: boolean = false;
  processString: string = "Sign In";

  constructor(private _router: Router, private _loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      UserName: ['',  Validators.required],
      Password: ['', Validators.required]
    })
  }

  login() {
    debugger;
    this.isCheck = true;
    this.processString = "Processing";
    console.log(this.LoginForm);
    this._loginService.login(this.LoginForm.value).subscribe(response => {
      debugger;
      console.log(response.status);
      if (response.status == 200) {
        this.isCheck = false;
        this.processString = "Sign In";
        this._router.navigate([`./dashboard`]);
      }
    }, error => {
      this.isCheck = false;
      this.processString = "Sign In";
      // this.toastr.error("invalid username  and password");
    });
  }
 }
