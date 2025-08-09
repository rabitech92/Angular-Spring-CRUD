import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rabiul } from './rabiul';

describe('Rabiul', () => {
  let component: Rabiul;
  let fixture: ComponentFixture<Rabiul>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Rabiul]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rabiul);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
