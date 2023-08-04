import { FormControl } from '@angular/forms';

export interface EmergencyContact {
  fullName: string;
  phone: string;
}

export interface EmergencyContactForm {
  fullName: FormControl<string>;
  phone: FormControl<string>;
}