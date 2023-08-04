import { FormControl, FormGroup } from '@angular/forms';

export interface FilterForm  extends FormGroup <{
  city: FormControl<string | null>;
  howMany: FormControl<number | null>;
  checkIn: FormControl<Date | null>;
  checkOut: FormControl<Date | null>;
}> {}