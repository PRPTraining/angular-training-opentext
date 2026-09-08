import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  //Angular:string = "Angular";

  recievedMessage: string = '';

  recieveMessageEvent(message: string): void {
    this.recievedMessage = message;
  }


  greet(): string {
    return 'Hello from Parent Component';
  }

}
