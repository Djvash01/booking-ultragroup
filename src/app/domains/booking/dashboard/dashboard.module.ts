import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '@shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardInfoComponent } from './ui/dashboard-info/dashboard-info.component';
import { HotelListComponent } from '../hotels/ui/hotel-list/hotel-list.component';
import { HotelsModule } from '../hotels/hotels.module';
import { BookingModule } from '../booking/booking.module';
import { BookingDetailsComponent } from './ui/booking-details/booking-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardInfoComponent,
    BookingDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTabsModule,
    HotelsModule,
    BookingModule
  ]
})
export class DashboardModule { }
