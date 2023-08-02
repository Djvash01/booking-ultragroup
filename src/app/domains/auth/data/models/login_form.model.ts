import { FormControl, FormGroup } from '@angular/forms';

export interface LoginForm extends FormGroup <{
  email: FormControl<string>;
  password: FormControl<string>;
}>{}