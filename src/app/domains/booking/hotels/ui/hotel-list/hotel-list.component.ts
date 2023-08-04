import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../data/models';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent {

  @Input() hotels: Hotel[] = [];
  @Input() routeToNavigate: string = './hotels/details';


  hotelTrackBy(index: number, hotel: Hotel): string {
    return hotel.id!;
  }
}
