import { FormControl, FormGroup } from '@angular/forms';

export interface FilterForm  extends FormGroup <{
  city: FormControl<string | null>;
  howMany: FormControl<number>;
  checkIn: FormControl<Date>;
  checkOut: FormControl<Date>;
}> {}