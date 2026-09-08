import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'taskflow-tasks';

function loadInitialTask(): Task[] {
  const raw = typeof localStorage !== undefined ? localStorage.getItem(STORAGE_KEY) : null;
  if (raw) {
    try{
    return (JSON.parse(raw) as Task[]).map((t) => ({ ...t, createdAt: new Date(t.createdAt) }));
    }
    catch{
      // by passing exception as of now
    }
  }
  return [
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
    }
  ];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
private readonly _tasks= signal<Task[]>(loadInitialTask())

readonly tasks =this._tasks.asReadonly()

readonly pendingCount =computed(()=> this._tasks().filter(t=>t.status!=='done').length)
readonly completedCount =computed(()=> this._tasks().filter(t=>t.status ==='done').length)

}



