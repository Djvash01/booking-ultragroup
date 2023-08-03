import { Component } from '@angular/core';
import { HotelService } from './data/repository/hotel.service';
import { Hotel } from './data/models';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {

  public isLoading = false;

  constructor(private readonly hotelService: HotelService, private readonly router: Router){}

  public save(hotel: Hotel): void {
    this.isLoading = true;
    this.hotelService.save(hotel).pipe(
      finalize(() => {
        this.isLoading =false;
      })
    ).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    });
  }

}
