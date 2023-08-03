import { Injectable } from '@angular/core';
import { HotelRepository } from './hotel.repository';
import { Observable } from 'rxjs';
import { Hotel } from '../models';
import { RequestService } from '@services/request/request.service';
import { EndpointsService } from '@services/endpoints/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService implements HotelRepository{

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService
  ) {}

  public update(hotel: Partial<Hotel>): Observable<Hotel> {
    return this.request.patch<Hotel>(this.endpoints.hotels.byIdUrl(hotel.id!), hotel);
  }

  public getHotel(id: string): Observable<Hotel> {
    return this.request.get<Hotel>(this.endpoints.hotels.byIdUrl(id));
  }

  public save(hotel: Hotel): Observable<Hotel> {
    return this.request.post<Hotel>(this.endpoints.hotels.url, hotel);
  }
}
