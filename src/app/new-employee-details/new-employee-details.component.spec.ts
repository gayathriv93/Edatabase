import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmployeeDetailsComponent } from './new-employee-details.component';

describe('NewEmployeeDetailsComponent', () => {
  let component: NewEmployeeDetailsComponent;
  let fixture: ComponentFixture<NewEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmployeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
