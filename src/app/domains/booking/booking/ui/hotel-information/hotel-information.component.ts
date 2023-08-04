import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter } from '@domains/booking/home/data/models/filters.model';
import { Hotel, Room } from '@domains/booking/hotels/data/models';
import { HotelService } from '@domains/booking/hotels/data/repository/hotel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-information',
  templateUrl: './hotel-information.component.html',
  styleUrls: ['./hotel-information.component.scss'],
})
export class HotelInformationComponent {
  public hotel$!: Observable<Hotel>;
  public hotelId!: string;
  public filter!: Filter;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly hotelService: HotelService,
    private readonly location: Location
  ) {}

  public ngOnInit(): void {
    this.getHotel();
    this.getBookingParams();
  }

  private getHotel(): void {
    this.route.paramMap.subscribe((params) => {
      this.hotelId = 'id';
      this.hotel$ = this.hotelService.getHotel(this.hotelId);
    });
  }

  private getBookingParams(): void {
    this.filter = this.location.getState() as Filter;
    console.log(this.filter);
  }

  trackByRoom(index: number, room: Room): string {
    return room.id!;
  }

  public goToGuestsForm(roomId: string): void {
    this.router.navigate(['./guests'], {
      relativeTo: this.route,
      queryParams: {
        hotelId: this.hotelId,
        howMany: this.filter.howMany,
        checkIn: this.filter.checkIn.toLocaleString(),
        checkOut: this.filter.checkOut.toLocaleString(),
        roomId,
      },
    });
  }
}
