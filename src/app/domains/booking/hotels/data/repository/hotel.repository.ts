import { Observable } from 'rxjs';
import { Hotel, Room } from '../models';

export abstract class HotelRepository {
  public abstract save(hotel: Hotel): Observable<Hotel>;
  public abstract update(hotel: Partial<Hotel>): Observable<Hotel>;
  public abstract updateRoom(hotel: Partial<Room>): Observable<Room>;
  public abstract getHotel(id: string): Observable<Hotel>;
}