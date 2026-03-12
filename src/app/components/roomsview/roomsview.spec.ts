import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roomsview } from './roomsview';

describe('Roomsview', () => {
  let component: Roomsview;
  let fixture: ComponentFixture<Roomsview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roomsview],
    }).compileComponents();

    fixture = TestBed.createComponent(Roomsview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
