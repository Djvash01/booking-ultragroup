import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { Hotel, HotelForm, RoomForm } from '../../data/models';
import { FormArray, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelFormComponent implements OnInit {

  public form!: HotelForm;

  @Output() public savePressed = new EventEmitter<Hotel>();

  @Input()
  public set isLoading(value: boolean) {
    this.loading.set(value);
  }

  public loading = signal<boolean>(false);

  constructor(private readonly fb: NonNullableFormBuilder){}

  public ngOnInit(): void {
    this.createHotelForm();
  }

  private createHotelForm(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
      imgUrl: this.fb.control('', [Validators.required]),
      disabled: this.fb.control<boolean>(false, [Validators.required]),
      location: this.fb.control('', [Validators.required]),
      rooms: this.fb.array<RoomForm>([this.createRoomForm()])
    })
  }

  public get roomsControl() {
    return this.form.get('rooms') as FormArray<RoomForm>;
  }

  private createRoomForm(): RoomForm {
    return this.fb.group({
      id: this.fb.control<string>('', [Validators.required]),
      type: this.fb.control<string>('', [Validators.required]),
      location: this.fb.control<string>('', [Validators.required]),
      cost: this.fb.control<number>(0, [Validators.required]),
      tax: this.fb.control<number>(0, [Validators.required]),
      disabled: this.fb.control<boolean>(false, [Validators.required]),
    });
  }

  public addRoom(): void {
    this.roomsControl.push(this.createRoomForm());
  }

  public removeRoom(index: number): void {
    this.roomsControl.removeAt(index);
  }

  public save(): void {
    if (this.form.invalid) return;
    this.savePressed.emit(this.form.getRawValue())
  }
}
