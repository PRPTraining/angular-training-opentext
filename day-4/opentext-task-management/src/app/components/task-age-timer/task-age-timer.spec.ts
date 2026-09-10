import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAgeTimer } from './task-age-timer';

describe('TaskAgeTimer', () => {
  let component: TaskAgeTimer;
  let fixture: ComponentFixture<TaskAgeTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskAgeTimer],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAgeTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
