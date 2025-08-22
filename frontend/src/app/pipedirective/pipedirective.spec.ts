import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipedirective } from './pipedirective';

describe('Pipedirective', () => {
  let component: Pipedirective;
  let fixture: ComponentFixture<Pipedirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pipedirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipedirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
