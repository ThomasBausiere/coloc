import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactUs } from './btn-contact-us';

describe('BtnContactUs', () => {
  let component: BtnContactUs;
  let fixture: ComponentFixture<BtnContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnContactUs],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnContactUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
