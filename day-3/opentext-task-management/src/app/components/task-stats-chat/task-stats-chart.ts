import { Component, computed, input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-stats-chat',
  imports: [],
  template: `
    <div class="stats">
      <strong>Task breakdown</strong>
      <p>To do : {{ todo() }} . In Progress : {{ inProgress() }} . Done: {{ done() }}</p>
    </div>
  `,
  styles: `
    .stats {
      border: 1px dashed #aaa;
      padding: 10px;
      margin-top: 12px;
      font-size: 0.85rem;
    }
  `,
})
export class TaskStatsChart {
  tasks = input.required<Task[]>();

  todo = computed(() => this.tasks().filter((t) => t.status === 'todo').length);
  inProgress = computed(() => this.tasks().filter((t) => t.status === 'in-progress').length);
  done = computed(() => this.tasks().filter((t) => t.status === 'done').length);
}
