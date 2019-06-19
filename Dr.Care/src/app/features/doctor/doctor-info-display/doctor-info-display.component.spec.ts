import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfoDisplayComponent } from './doctor-info-display.component';

describe('DoctorInfoDisplayComponent', () => {
  let component: DoctorInfoDisplayComponent;
  let fixture: ComponentFixture<DoctorInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
