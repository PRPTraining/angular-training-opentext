import { Component, computed, inject, signal } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task-service';
import { APP_CONFIG } from '../../config/app-config.token';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private taskService = inject(TaskService);

  private config = inject(APP_CONFIG);

  filterText = signal('');

  tasks = this.taskService.tasks;
  pendingCount = this.taskService.pendingCount;

  filteredTasks = computed(() =>
    this.tasks().filter((t) => t.title.toLowerCase().includes(this.filterText().toLowerCase())),
  );

  onMarkDone(taskId: string) {
    this.taskService.markDone(taskId);
  }

  onFilterInput(input: string): void {
    this.filterText.set(input);
  }

  demo() {
    let getUrl: string = this.config.apiBaseUrl + '/getAll';
  }
}
