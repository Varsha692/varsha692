import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeRadioButtonComponent } from './we-radio-button.component';

describe('WeRadioButtonComponent', () => {
  let component: WeRadioButtonComponent;
  let fixture: ComponentFixture<WeRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
