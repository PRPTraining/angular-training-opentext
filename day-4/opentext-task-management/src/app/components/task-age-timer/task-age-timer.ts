import { Component, input, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-task-age-timer',
  imports: [],
  template: '<span class="age">{{ageLabel()}}</span>',
  styles: [
    `
      .age {
        font-size: 0.75rem;
        color: #888;
      }
    `,
  ],
})
export class TaskAgeTimer implements OnInit,OnDestroy {

  createdAt =input.required<Date>();
  ageLabel = signal('just now');

  private intervalId?: ReturnType<typeof setInterval>

  constructor(){

  }
 
  ngOnInit(): void {
    this.updateLabel()
    this.intervalId = setInterval(()=> this.updateLabel(),1000)
  }

 ngOnDestroy(): void {
   clearInterval(this.intervalId)
  }

  private updateLabel(): void {
    const seconds = Math.floor((Date.now() - this.createdAt().getTime()) / 1000);
    if (seconds < 60) {
      this.ageLabel.set(`${seconds}s ago`);
    } else if (seconds < 3600) {
      this.ageLabel.set(`${Math.floor(seconds / 60)}m ago`);
    } else {
      this.ageLabel.set(`${Math.floor(seconds / 3600)}h ago`);
    }
  }

}
