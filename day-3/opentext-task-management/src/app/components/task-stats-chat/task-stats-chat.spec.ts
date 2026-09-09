import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatsChat } from './task-stats-chart';

describe('TaskStatsChat', () => {
  let component: TaskStatsChat;
  let fixture: ComponentFixture<TaskStatsChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatsChat],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskStatsChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
