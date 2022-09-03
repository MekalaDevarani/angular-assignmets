import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdate22Component } from './employee-update22.component';

describe('EmployeeUpdate22Component', () => {
  let component: EmployeeUpdate22Component;
  let fixture: ComponentFixture<EmployeeUpdate22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdate22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUpdate22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
