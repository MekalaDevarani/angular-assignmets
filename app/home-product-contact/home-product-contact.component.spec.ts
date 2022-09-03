import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductContactComponent } from './home-product-contact.component';

describe('HomeProductContactComponent', () => {
  let component: HomeProductContactComponent;
  let fixture: ComponentFixture<HomeProductContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProductContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
