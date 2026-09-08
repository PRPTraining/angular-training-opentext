import { Component, signal } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  
  filterText = '';

  tasks = signal<Task[]>([
    {
      id: '1',
      title: 'Design login screen',
      status: 'todo',
      priority: 1,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Set up CI/CD',
      status: 'done',
      priority: 1,
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'Angular training',
      status: 'in-progress',
      priority: 1,
      createdAt: new Date(),
    },
  ]);

  filteredTasks(): Task[] {
    return this.tasks();
  }

  onMarkDone(taskId: string) {
  
    this.tasks.update(list=>
      list.map(t=>t.id===taskId ? {...t,status:'done'}:t))
   
  }
}
