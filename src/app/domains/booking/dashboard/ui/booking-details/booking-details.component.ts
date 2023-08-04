import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '@domains/booking/booking/data/models/booking.model';
import { BookingService } from '@domains/booking/booking/data/repository/booking.service';
import { Hotel } from '@domains/booking/hotels/data/models';
import { HotelService } from '@domains/booking/hotels/data/repository/hotel.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit{

  public hotel!: Hotel;
  public booking!: Booking;

  constructor(
    private readonly bookingService: BookingService,
    private readonly hotelService: HotelService,
    private readonly route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getData()
  }

  private getData(): void {
    this.route.paramMap.subscribe((params) => {
      this.getBooking(params.get('bookingId') ?? '');
    });
  }

  private getBooking(bookingId: string): void {
    this.bookingService.getById(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.getHotel(booking.hotelId);
    })
  }

  private getHotel(hotelId: string): void {
    this.hotelService.getHotel(hotelId).subscribe((hotel) => {
      this.hotel = hotel;
    })
  }

}
