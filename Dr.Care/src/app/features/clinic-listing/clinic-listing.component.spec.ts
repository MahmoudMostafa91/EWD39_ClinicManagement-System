import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicListingComponent } from './clinic-listing.component';

describe('ClinicListingComponent', () => {
  let component: ClinicListingComponent;
  let fixture: ComponentFixture<ClinicListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
