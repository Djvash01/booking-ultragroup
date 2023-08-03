import { Observable } from 'rxjs';
import { Hotel } from '../models';

export abstract class HotelRepository {
  public abstract save(hotel: Hotel): Observable<Hotel>;
}