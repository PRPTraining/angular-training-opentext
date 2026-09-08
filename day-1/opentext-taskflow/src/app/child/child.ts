import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {

  @Input()
  message=""

  @Output()
  messageEvent = new EventEmitter<string>()

  sendMessage(): void {
    this.messageEvent.emit('Recieved the message from child: ' + this.message);
  }
}
