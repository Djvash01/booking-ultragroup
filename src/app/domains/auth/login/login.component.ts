import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { LoginForm } from '../data/models/login_form.model';
import { LoginService } from '../data/repository/login.service';
import { finalize } from 'rxjs';
import { Authentication } from '../data/models/authentication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public isLoading = false;
  public form?: LoginForm;

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  public login(form: LoginForm): void {
    if (form.invalid) return;
    this.form = form;
    this.isLoading = true;

    this.loginService.login(this.form.getRawValue()).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((auth: Authentication) => {
      sessionStorage.setItem('user_token', JSON.stringify(auth));
      this.router.navigateByUrl('/admin');
    });

  }
}
