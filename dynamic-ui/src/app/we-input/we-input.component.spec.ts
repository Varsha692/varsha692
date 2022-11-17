import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeInputComponent } from './we-input.component';

describe('WeInputComponent', () => {
  let component: WeInputComponent;
  let fixture: ComponentFixture<WeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
