import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../models/task.model';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {

  private labels :Record<TaskStatus,string>={
    "todo":'TO DO',
    "in-progress": 'IN PROGRESS',
    "done":'DONE'
  }

  transform(status:TaskStatus): string {
    return this.labels[status];
  }
}
