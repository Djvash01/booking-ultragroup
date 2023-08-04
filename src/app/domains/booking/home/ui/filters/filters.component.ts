import { Component,Output, Input, EventEmitter, signal, OnInit } from '@angular/core';
import { FilterForm } from '../../data/models/filters_form.model';
import { Hotel } from '@domains/booking/hotels/data/models';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Filter } from '../../data/models/filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public filterForm!: FilterForm;

  @Output() public searchPressed = new EventEmitter<Filter>();

  @Input()
  public set isLoading(value: boolean) {
    this.loading.set(value);
  }

  public loading = signal<boolean>(false);

  constructor(private readonly fb: FormBuilder){}

  public ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.filterForm = this.fb.group({
      city: new FormControl<string | null>(null),
      howMany: new FormControl<number>(1, { nonNullable: true , validators: [Validators.required]}),
      checkIn: new FormControl<Date>(new Date(), { nonNullable: true, validators: [Validators.required] }),
      checkOut: new FormControl<Date>(new Date(), { nonNullable: true , validators: [Validators.required]}),
    });
  }

  public search(): void {
    if (this.filterForm.invalid) return;
    this.searchPressed.emit(this.filterForm.getRawValue())
  }

}
