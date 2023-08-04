import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HotelInformationComponent } from './ui/hotel-information/hotel-information.component';
import { GuestsComponent } from './guest/guests.component';
import { GuestFormComponent } from './ui/guest-form/guest-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { BookingListComponent } from './ui/booking-list/booking-list.component';
import { BookingInformationComponent } from './ui/booking-information/booking-information.component';




@NgModule({
  declarations: [
    BookingComponent,
    HotelInformationComponent,
    GuestsComponent,
    GuestFormComponent,
    BookingListComponent,
    BookingInformationComponent
  ],
  exports: [BookingListComponent, BookingInformationComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class BookingModule { }
