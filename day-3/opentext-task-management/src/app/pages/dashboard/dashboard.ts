import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { TaskStatsChart } from '../../components/task-stats-chat/task-stats-chart';

@Component({
  selector: 'app-dashboard',
  imports: [TaskStatsChart],
  template: `
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>{{ pendingCount() }} pending. {{ completedCount() }} completed</p>

      <app-task-stats-chat [tasks]="tasks()"></app-task-stats-chat>
    </div>
  `,
  styles: `
    .dashboard {
      max-width: 480px;
      margin: 40px auto;
    }
  `,
})
export class Dashboard {
  private taskService = inject(TaskService);
  tasks = this.taskService.tasks;
  pendingCount = this.taskService.pendingCount;
  completedCount = this.taskService.completedCount;
}
