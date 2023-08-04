import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

export abstract class BookingRepository {
  public abstract save(booking: Partial<Booking>): Observable<Booking>;
  public abstract getAll(): Observable<Booking[]>;
  public abstract getById(id: string): Observable<Booking>;
}