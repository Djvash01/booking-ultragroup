import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardInfoComponent } from './ui/dashboard-info/dashboard-info.component';
import { BookingDetailsComponent } from './ui/booking-details/booking-details.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardInfoComponent,
      },
      { path: 'hotels', loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsModule) },
      { path: 'booking/:bookingId', component: BookingDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
