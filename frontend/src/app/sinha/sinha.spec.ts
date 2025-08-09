import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinha } from './sinha';

describe('Sinha', () => {
  let component: Sinha;
  let fixture: ComponentFixture<Sinha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sinha]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sinha);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
