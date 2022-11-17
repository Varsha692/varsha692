import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDateComponent } from './we-date.component';

describe('WeDateComponent', () => {
  let component: WeDateComponent;
  let fixture: ComponentFixture<WeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
