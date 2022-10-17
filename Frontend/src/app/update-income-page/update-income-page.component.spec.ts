import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncomePageComponent } from './update-income-page.component';

describe('UpdateIncomePageComponent', () => {
  let component: UpdateIncomePageComponent;
  let fixture: ComponentFixture<UpdateIncomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIncomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIncomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
