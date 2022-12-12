import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscdexComponent } from './discdex.component';

describe('DiscdexComponent', () => {
  let component: DiscdexComponent;
  let fixture: ComponentFixture<DiscdexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscdexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscdexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
