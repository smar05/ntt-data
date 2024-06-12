import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnumLocalStorage } from 'src/app/enums/enums-localstorage';
import { EnumRutas } from 'src/app/enums/enums-rutas';
import { ILogin } from 'src/app/interface/i-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public f: UntypedFormGroup = this.form.group({
    username: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^[a-zA-Z0-9._-]{6,20}$/),
        ],
      },
    ],
    password: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      },
    ],
  });

  get username() {
    return this.f.controls['username'];
  }

  get password() {
    return this.f.controls['password'];
  }

  constructor(
    private form: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  public ngOnInit(): void {}

  public login(): void {
    if (this.f.invalid) return;

    let login: ILogin = {
      username: this.username.value,
      password: this.password.value,
    };

    this.loginService.login(login).subscribe(
      (res) => {
        localStorage.setItem(EnumLocalStorage.TOKEN, res.token);
        this.router.navigate([`/${EnumRutas.VEHICULOS}`]);
      },
      (err) => {}
    );
  }
}
