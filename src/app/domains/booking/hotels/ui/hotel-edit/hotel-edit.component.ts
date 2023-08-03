import { Component, signal } from '@angular/core';
import { Hotel, HotelForm, RoomForm } from '../../data/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, finalize } from "rxjs";
import { HotelService } from '../../data/repository/hotel.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html',
  styleUrls: ['./hotel-edit.component.scss']
})
export class HotelEditComponent {

  public hotel!: Hotel;
  public form!: HotelForm;

  public loading = signal<boolean>(false);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly hotelService: HotelService,
    private readonly fb: NonNullableFormBuilder

  ) {
  }

  public ngOnInit(): void {
    this.getHotel()
  }

  private getHotel(): void {
    this.route.paramMap.pipe(
      map((params) =>  'id'),
      switchMap((id) => this.hotelService.getHotel(id))
    ).subscribe((hotel) => {
      this.hotel = hotel;
      this.createHotelForm(hotel);
    });
  }

  private createHotelForm(hotel: Hotel): void {
    this.form = this.fb.group({
      name: this.fb.control(hotel.name, [Validators.required]),
      city: this.fb.control(hotel.city, [Validators.required]),
      imgUrl: this.fb.control(hotel.imgUrl, [Validators.required]),
      disabled: this.fb.control<boolean>(hotel.disabled, [Validators.required]),
      location: this.fb.control(hotel.location, [Validators.required]),
      rooms: this.fb.array<RoomForm>([])
    })
  }

  public update(): void {
    if(this.form.invalid) return;
    this.loading.set(true);
    const hotel = {...this.form.getRawValue(), id: 'id', rooms: this.hotel.rooms};
    this.hotelService.update(hotel)
    .pipe(finalize(() => {
      this.loading.set(false);
    }))
    .subscribe(()=>{
      this.router.navigateByUrl('dashboard/hotels/details/id');
    })
  }
}
