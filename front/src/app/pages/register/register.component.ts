import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EnumLocalStorage } from 'src/app/enums/enums-localstorage';
import { EnumRutas } from 'src/app/enums/enums-rutas';
import { Alerts } from 'src/app/helpers/alerts';
import { IRegister } from 'src/app/interface/i-register';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    confirmPassword: [
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

  get confirmPassword() {
    return this.f.controls['confirmPassword'];
  }

  constructor(
    private router: Router,
    private form: UntypedFormBuilder,
    private loginService: LoginService
  ) {}

  public ngOnInit(): void {
    localStorage.removeItem(EnumLocalStorage.TOKEN);
  }

  public goBack(): void {
    this.router.navigate([`/${EnumRutas.LOGIN}`]);
  }

  public equalPassword(): boolean {
    return this.password.value === this.confirmPassword.value;
  }

  public register(): void {
    if (this.f.invalid) return;

    let register: IRegister = {
      username: this.username.value,
      password: this.password.value,
    };

    this.loginService.register(register).subscribe(
      (res: any) => {
        Alerts.basicAlert('OK', 'Registro exitoso', 'success');
        this.goBack();
      },
      (err) => {
        Alerts.basicAlert('Error', 'Ha ocurrido un error', 'error');
      }
    );
  }
}
