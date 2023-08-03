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

  public save(hotel: Hotel): Observable<Hotel> {
    return this.request.post<Hotel>(this.endpoints.hotels.url, hotel);
  }
}
