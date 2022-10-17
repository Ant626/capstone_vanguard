import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSavingsPageComponent } from './update-savings-page.component';

describe('UpdateSavingsPageComponent', () => {
  let component: UpdateSavingsPageComponent;
  let fixture: ComponentFixture<UpdateSavingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSavingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSavingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
