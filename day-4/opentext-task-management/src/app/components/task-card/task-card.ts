import { Component, Input, input, output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskAgeTimer } from '../task-age-timer/task-age-timer';
import { StatusLabelPipe } from "../../pipes/status-label-pipe";
import { Apphover } from '../../directives/apphover';

@Component({
  selector: 'app-task-card',
  imports: [TaskAgeTimer, StatusLabelPipe,Apphover],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  task= input.required<Task>();

  markDone =output<string>();

  
}
