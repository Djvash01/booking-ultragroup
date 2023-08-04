import { Component, OnInit } from '@angular/core';
import { Filter } from './data/models/filters.model';
import { Hotel } from '../hotels/data/models';
import { Observable, map, finalize } from 'rxjs';
import { HotelService } from '../hotels/data/repository/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoading = false;

  public hotels$!: Observable<Hotel[]>;

  public filter?: Filter;

  constructor(private readonly hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotels$ = this.hotelService.getAllHotel();
  }

  public search(options: Filter): void {
    this.filter = options;
    this.isLoading = true;
    this.hotels$ = this.hotelService.getAllHotel().pipe(
      finalize(() => {
        this.isLoading = false;
      }),
      map((hotels) => {
        if (!options.city) return hotels;
        return hotels.filter(
          (hotel) => hotel.city.toLowerCase() === options?.city?.toLowerCase()
        );
      })
    );
  }
}
