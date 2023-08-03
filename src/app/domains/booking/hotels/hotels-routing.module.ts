import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelDetailsComponent } from './ui/hotel-details/hotel-details.component';
import { HotelEditComponent } from './ui/hotel-edit/hotel-edit.component';

const routes: Routes = [
  { path: 'add', component: HotelsComponent },
  { path: 'details/:id', component: HotelDetailsComponent },
  { path: 'edit/:id', component: HotelEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
