import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCelendarComponent } from './reservation-celendar.component';

describe('ReservationCelendarComponent', () => {
  let component: ReservationCelendarComponent;
  let fixture: ComponentFixture<ReservationCelendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationCelendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationCelendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
