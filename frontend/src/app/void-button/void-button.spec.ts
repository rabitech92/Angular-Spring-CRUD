import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidButton } from './void-button';

describe('VoidButton', () => {
  let component: VoidButton;
  let fixture: ComponentFixture<VoidButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoidButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoidButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
