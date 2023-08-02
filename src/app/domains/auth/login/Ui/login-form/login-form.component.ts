import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { LoginForm } from '@domains/auth/data/models/login_form.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  @Input()
  public set isLoading(value: boolean) {
    this.loading.set(value);
  }

  public loading = signal<boolean>(false);


  @Output() loginPressed = new EventEmitter<LoginForm>();

  public hide = true;
  public form: LoginForm;

  constructor(private readonly formBuilder: NonNullableFormBuilder){
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', Validators.required)
    });

  }

  public login(): void {
    this.loginPressed.emit(this.form);
  }

}
