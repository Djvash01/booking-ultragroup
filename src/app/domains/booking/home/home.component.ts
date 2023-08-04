import { Component } from '@angular/core';
import { Filter } from './data/models/filters.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public isLoading = false;

  public search(filter:Filter): void {
    console.log(filter);
    
  }
}
