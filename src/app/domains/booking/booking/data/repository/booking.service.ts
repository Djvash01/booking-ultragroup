import { Injectable } from '@angular/core';
import { BookingRepository } from './booking.repository';
import { Booking } from '../models/booking.model';
import { RequestService } from '@services/request/request.service';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService implements BookingRepository {

  constructor(
    private readonly request: RequestService,
    private readonly endpoints: EndpointsService
  ) {}

  public getById(id: string): Observable<Booking> {
    return this.request.get<Booking>(this.endpoints.booking.byIdUrl('id'));
  }

  public getAll(): Observable<Booking[]> {
    return this.request.get<Booking[]>(
      this.endpoints.booking.url
    );
  }

  public save(booking: Partial<Booking>): Observable<Booking> {
    return this.request.post<Booking>(
      this.endpoints.booking.url,
      booking
    );
  }
}
