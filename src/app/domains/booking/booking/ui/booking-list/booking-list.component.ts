import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Booking } from '../../data/models/booking.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingListComponent {
  @Input({
    required: true
  }) public bookings: Booking[] = [];

  public bookingTrackBy(index: number, booking: Booking): string {
    return booking.id;
  }
}
