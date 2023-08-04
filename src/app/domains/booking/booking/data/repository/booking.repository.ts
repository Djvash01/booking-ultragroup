import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

export abstract class BookingRepository {
  public abstract save(booking: Booking): Observable<Booking>;
}