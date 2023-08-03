import { Observable } from 'rxjs';
import { Hotel } from '../models';

export abstract class HotelRepository {
  public abstract save(hotel: Hotel): Observable<Hotel>;
  public abstract update(hotel: Partial<Hotel>): Observable<Hotel>;
  public abstract getHotel(id: string): Observable<Hotel>;
}