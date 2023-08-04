import { FormControl } from '@angular/forms';

export interface Guest {
  name: string;
  lastName: string;
  birthDay: Date;
  gender: string;
  documentType: DocumentType;
  document: string;
  email: string;
  phone: string;
}

export interface GuestForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  birthDay: FormControl<Date>;
  gender: FormControl<string>;
  documentType: FormControl<DocumentType>;
  document: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
}