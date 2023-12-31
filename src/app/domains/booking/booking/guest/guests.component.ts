import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { GuestForm } from '../data/models/guest.model';
import { DocumentType } from '../data/enums/document-type.enum';
import { Gender } from '../data/enums/gender.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../data/models/booking.model';
import { EmergencyContactForm } from '../data/models/emergency-contact.model';
import { BookingService } from '../data/repository/booking.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
  public guestsForm!: FormGroup<{
    guests: FormArray<FormGroup<GuestForm>>;
  }>;

  public emergencyContactForm!: FormGroup<EmergencyContactForm>;

  public booking!: Partial<Booking>;
  private howMany = 0;

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly bookingService: BookingService
  ) {}

  public ngOnInit(): void {
    this.getBookingData();
    this.createEmergencyForm();
  }

  private createEmergencyForm(): void {
    this.emergencyContactForm = this.fb.group<EmergencyContactForm>({
      fullName: this.fb.control<string>('', Validators.required),
      phone: this.fb.control<string>('', Validators.required),
    });
  }

  private getBookingData(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      this.booking = {
        hotelId: queryParams.get('hotelId') ?? '',
        roomId: queryParams.get('roomId') ?? '',
        checkIn: new Date(queryParams.get('hotelId') ?? ''),
        checkOut: new Date(queryParams.get('hotelId') ?? ''),
      };
      this.howMany = Number(queryParams.get('howMany'));
      this.createForm();
    });
  }

  private createForm(): void {
    this.guestsForm = this.fb.group({
      guests: this.fb.array(
        Array.from({ length: this.howMany }, () => this.createGuestForm())
      ),
    });
  }

  private createGuestForm(): FormGroup<GuestForm> {
    return this.fb.group<GuestForm>({
      birthDay: this.fb.control<Date>(new Date(), Validators.required),
      document: this.fb.control<string>('', Validators.required),
      documentType: this.fb.control<DocumentType>(
        DocumentType.PASSPORT,
        Validators.required
      ),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]), 
      gender: this.fb.control<Gender>(Gender.OTHER, Validators.required),
      name: this.fb.control<string>('', Validators.required),
      lastName: this.fb.control<string>('', Validators.required),
      phone: this.fb.control<string>('', Validators.required),
    });
  }

  public get guestsControl() {
    return this.guestsForm.get('guests') as FormArray<FormGroup<GuestForm>>;
  }

  public save(): void {
    if (this.guestsForm.invalid || this.emergencyContactForm.invalid) return;
    this.booking.emergencyContact = this.emergencyContactForm.getRawValue();
    this.booking.guests = this.guestsForm.getRawValue().guests;
    this.bookingService.save(this.booking).subscribe(() => {
      this.router.navigateByUrl('/home');
    })
  }
}
