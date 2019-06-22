import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclinicFormComponent } from './addclinic-form.component';

describe('AddclinicFormComponent', () => {
  let component: AddclinicFormComponent;
  let fixture: ComponentFixture<AddclinicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclinicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclinicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
