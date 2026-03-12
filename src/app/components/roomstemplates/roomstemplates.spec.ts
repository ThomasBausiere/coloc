import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roomstemplates } from './roomstemplates';

describe('Roomstemplates', () => {
  let component: Roomstemplates;
  let fixture: ComponentFixture<Roomstemplates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roomstemplates],
    }).compileComponents();

    fixture = TestBed.createComponent(Roomstemplates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
