import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelFormComponent } from './ui/hotel-form/hotel-form.component';
import { HotelListComponent } from './ui/hotel-list/hotel-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HotelDetailsComponent } from './ui/hotel-details/hotel-details.component';
import { HotelEditComponent } from './ui/hotel-edit/hotel-edit.component';
import { RoomsEditComponent } from './ui/rooms-edit/rooms-edit.component';




@NgModule({
  declarations: [
    HotelsComponent,
    HotelFormComponent,
    HotelListComponent,
    HotelDetailsComponent,
    HotelEditComponent,
    RoomsEditComponent
  ],
  exports:[
    HotelListComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HotelsModule { }
