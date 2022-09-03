import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformValidateComponent } from './templateform-validate.component';

describe('TemplateformValidateComponent', () => {
  let component: TemplateformValidateComponent;
  let fixture: ComponentFixture<TemplateformValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateformValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
