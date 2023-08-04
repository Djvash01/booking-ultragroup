import { FormControl } from '@angular/forms';
import { Gender } from '../enums/gender.enum';
import { DocumentType } from '../enums/document-type.enum';

export interface Guest {
  name: string;
  lastName: string;
  birthDay: Date;
  gender: Gender;
  documentType: DocumentType;
  document: string;
  email: string;
  phone: string;
}

export interface GuestForm {
  name: FormControl<string>;
  lastName: FormControl<string>;
  birthDay: FormControl<Date>;
  gender: FormControl<Gender>;
  documentType: FormControl<DocumentType>;
  document: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
}