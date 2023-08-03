import { Component, OnInit, signal } from '@angular/core';
import { Hotel, Room, RoomForm } from '../../data/models';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../data/repository/hotel.service';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { finalize, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-rooms-edit',
  templateUrl: './rooms-edit.component.html',
  styleUrls: ['./rooms-edit.component.scss']
})
export class RoomsEditComponent implements OnInit{
  public room!: Room;
  public form!: RoomForm;

  public loading = signal<boolean>(false);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly hotelService: HotelService,
    private readonly fb: NonNullableFormBuilder

  ) {
  }

  public ngOnInit(): void {
    this.getRoom()
  }

  private getRoom(): void {
    this.route.paramMap.pipe(
      map((params) =>  'id'),
      switchMap((id) => this.hotelService.getRoom(id))
    ).subscribe((room) => {
      this.room = room;
      this.createRoomForm(room);
    });
  }

  private createRoomForm(room: Room): void {
    this.form = this.fb.group({
      id: this.fb.control<string>('id', [Validators.required]),
      type: this.fb.control<string>(room.type, [Validators.required]),
      location: this.fb.control<string>(room.location, [Validators.required]),
      cost: this.fb.control<number>(room.cost, [Validators.required]),
      tax: this.fb.control<number>(room.tax, [Validators.required]),
      disabled: this.fb.control<boolean>(room.disabled, [Validators.required]),
    });
  }

  public update(): void {
    if(this.form.invalid) return;
    this.loading.set(true);
    const room = this.form.getRawValue();
    this.hotelService.update(room)
    .pipe(finalize(() => {
      this.loading.set(false);
    }))
    .subscribe(()=>{
      this.router.navigateByUrl('dashboard/hotels/details/id');
    })
  }
}
