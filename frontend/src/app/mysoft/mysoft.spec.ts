import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mysoft } from './mysoft';

describe('Mysoft', () => {
  let component: Mysoft;
  let fixture: ComponentFixture<Mysoft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mysoft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mysoft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
