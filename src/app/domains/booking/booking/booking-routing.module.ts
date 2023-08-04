import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { HotelInformationComponent } from './ui/hotel-information/hotel-information.component';

const routes: Routes = [{ 
  path: '', component: BookingComponent,
  children: [
    {
      path: '',
      component: HotelInformationComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
