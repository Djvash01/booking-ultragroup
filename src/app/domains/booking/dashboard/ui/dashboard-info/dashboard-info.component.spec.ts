import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfoComponent } from './dashboard-info.component';

describe('DashboardInfoComponent', () => {
  let component: DashboardInfoComponent;
  let fixture: ComponentFixture<DashboardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardInfoComponent]
    });
    fixture = TestBed.createComponent(DashboardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
