import { Component, OnInit } from '@angular/core';
import { Booking } from '@domains/booking/booking/data/models/booking.model';
import { BookingService } from '@domains/booking/booking/data/repository/booking.service';
import { Hotel } from '@domains/booking/hotels/data/models';
import { HotelService } from '@domains/booking/hotels/data/repository/hotel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;
  public bookings$: Observable<Booking[]>;

  constructor(
    private readonly hotelService: HotelService,
    private readonly bookingService: BookingService
  ){
    this.hotels$ = this.hotelService.getAllHotel();
    this.bookings$ = this.bookingService.getAll();
  }


  public ngOnInit(): void {
  }





}
