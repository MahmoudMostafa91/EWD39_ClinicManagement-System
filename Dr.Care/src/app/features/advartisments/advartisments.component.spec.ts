import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvartismentsComponent } from './advartisments.component';

describe('AdvartismentsComponent', () => {
  let component: AdvartismentsComponent;
  let fixture: ComponentFixture<AdvartismentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvartismentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvartismentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

