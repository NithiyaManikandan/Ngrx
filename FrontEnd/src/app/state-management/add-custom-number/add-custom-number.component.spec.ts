import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomNumberComponent } from './add-custom-number.component';

describe('AddCustomNumberComponent', () => {
  let component: AddCustomNumberComponent;
  let fixture: ComponentFixture<AddCustomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
