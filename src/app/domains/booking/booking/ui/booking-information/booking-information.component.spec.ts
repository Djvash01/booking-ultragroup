import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInformationComponent } from './booking-information.component';

describe('BookingInformationComponent', () => {
  let component: BookingInformationComponent;
  let fixture: ComponentFixture<BookingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingInformationComponent]
    });
    fixture = TestBed.createComponent(BookingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
