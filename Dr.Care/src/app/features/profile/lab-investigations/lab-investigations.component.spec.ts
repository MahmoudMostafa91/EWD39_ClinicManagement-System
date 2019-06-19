import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInvestigationsComponent } from './lab-investigations.component';

describe('LabInvestigationsComponent', () => {
  let component: LabInvestigationsComponent;
  let fixture: ComponentFixture<LabInvestigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabInvestigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
