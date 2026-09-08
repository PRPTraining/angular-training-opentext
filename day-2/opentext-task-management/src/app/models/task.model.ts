export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: 1 | 2 | 3;
  createdAt: Date;
  assignee?: string;
}


export type TaskDraft = Partial<Omit<Task, 'id' | 'createdAt'>>;


export class InMemoryRepository<T extends { id: string }> {

   private tasks: T[] = [];

   add(item: T): void {
      this.tasks.push(item);
   }

   findById(id: string): T | undefined {
      return this.tasks.find(task => task.id === id);
   }
    
   getAll(): T[] {
      return [...this.tasks];
   }
}





