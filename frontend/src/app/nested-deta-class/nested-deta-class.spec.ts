import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDetaClass } from './nested-deta-class';

describe('NestedDetaClass', () => {
  let component: NestedDetaClass;
  let fixture: ComponentFixture<NestedDetaClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NestedDetaClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedDetaClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
