import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GuestForm } from '../../data/models/guest.model';
import { Gender } from '../../data/enums/gender.enum';
import { DocumentType } from '../../data/enums/document-type.enum';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent {

  @Input({
    required: true,
  }) public guestForm!: FormGroup<GuestForm>;

  public genders: Gender[] = Object.keys(Gender).map((key) => {
    const gender = key as keyof typeof Gender;
    return Gender[gender];
  });

  public documentTypes: DocumentType[] = Object.keys(DocumentType).map((key) => {
    const documentType = key as keyof typeof DocumentType;
    return DocumentType[documentType];
  });

}
