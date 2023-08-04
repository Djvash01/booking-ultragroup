import { Component, OnInit } from '@angular/core';
import { Filter } from './data/models/filters.model';
import { Hotel } from '../hotels/data/models';
import { Observable, map, finalize, filter } from "rxjs";
import { HotelService } from '../hotels/data/repository/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoading = false;

  public hotels$!:Observable<Hotel[]>;

  constructor(
    private readonly hotelService: HotelService
  ){}

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getAllHotel();
  }

  public search(filter:Filter): void {
    console.log(filter);
  }
}
