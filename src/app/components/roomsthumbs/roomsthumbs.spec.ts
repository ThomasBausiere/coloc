import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roomsthumbs } from './roomsthumbs';

describe('Roomsthumbs', () => {
  let component: Roomsthumbs;
  let fixture: ComponentFixture<Roomsthumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roomsthumbs],
    }).compileComponents();

    fixture = TestBed.createComponent(Roomsthumbs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
