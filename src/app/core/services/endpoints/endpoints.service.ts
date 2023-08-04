import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private readonly hotelSegment = '/hotels';
  private readonly roomsSegment = '/rooms';
  private readonly authSegment = '/auth';
  private readonly bookingSegment = '/booking';

  public readonly hotels = {
    url: `${environment.apiUrl}${this.hotelSegment}`,
    byIdUrl: (id: string) => `${environment.apiUrl}${this.hotelSegment}/${id}`,
  } as const;

  public readonly rooms = {
    url: `${environment.apiUrl}${this.roomsSegment}`,
    byIdUrl: (id: string) => `${environment.apiUrl}${this.roomsSegment}/${id}`,
  } as const;

  public readonly booking = {
    url: `${environment.apiUrl}${this.bookingSegment}`,
    byIdUrl: (id: string) => `${environment.apiUrl}${this.bookingSegment}/${id}`,
  } as const;

  public readonly auth = {
    login: `${environment.apiUrl}${this.authSegment}/login`,
  } as const;
}
