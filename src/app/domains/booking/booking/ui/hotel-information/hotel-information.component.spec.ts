import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelInformationComponent } from './hotel-information.component';

describe('HotelInformationComponent', () => {
  let component: HotelInformationComponent;
  let fixture: ComponentFixture<HotelInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelInformationComponent]
    });
    fixture = TestBed.createComponent(HotelInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
