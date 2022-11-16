import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeUploadFileComponent } from './we-upload-file.component';

describe('WeUploadFileComponent', () => {
  let component: WeUploadFileComponent;
  let fixture: ComponentFixture<WeUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeUploadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
