import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface HotelForm extends FormGroup <{
  name: FormControl<string>;
  city: FormControl<string>;
  imgUrl: FormControl<string>;
  disabled: FormControl<boolean>;
  location: FormControl<string>;
  rooms: FormArray<RoomForm>;
}>{}

export interface RoomForm  extends FormGroup <{
  id: FormControl<string>;
  cost: FormControl<number>;
  tax: FormControl<number>;
  type: FormControl<string>;
  location: FormControl<string>;
  disabled: FormControl<boolean>;
}> {}