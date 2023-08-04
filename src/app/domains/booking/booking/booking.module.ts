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


@NgModule({
  declarations: [
    BookingComponent,
    HotelInformationComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class BookingModule { }
