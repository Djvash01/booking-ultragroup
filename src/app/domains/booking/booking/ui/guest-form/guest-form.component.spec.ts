import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFormComponent } from './guest-form.component';

describe('GuestFormComponent', () => {
  let component: GuestFormComponent;
  let fixture: ComponentFixture<GuestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestFormComponent]
    });
    fixture = TestBed.createComponent(GuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
