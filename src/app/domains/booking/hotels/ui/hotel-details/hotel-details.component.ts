import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EndpointsService } from '@services/endpoints/endpoints.service';
import { RequestService } from '@services/request/request.service';
import { HotelService } from '../../data/repository/hotel.service';
import { Hotel, Room } from '../../data/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent implements OnInit {

  public hotel$!: Observable<Hotel>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly hotelService: HotelService
  ) {
  }

  public ngOnInit(): void {
    this.getHotel()
  }

  private getHotel(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id') ?? 'id';
      this.hotel$ = this.hotelService.getHotel(id);
    });
  }

  trackByRoom(index: number, room: Room): string {
    return room.id!;
  }

}
