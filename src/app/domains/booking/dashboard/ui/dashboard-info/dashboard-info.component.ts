import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly hotelService: HotelService
  ){
    this.hotels$ = this.hotelService.getAllHotel();
  }


  public ngOnInit(): void {
  }





}
