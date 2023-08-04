import { Component, Input } from '@angular/core';
import { Booking } from '../../data/models/booking.model';
import { Hotel } from '@domains/booking/hotels/data/models';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['./booking-information.component.scss']
})
export class BookingInformationComponent {

  @Input({
    required: true
  }) public booking!: Booking;

  @Input({
    required: true
  }) public hotel!: Hotel;

}
