import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-signal',
  imports: [FormsModule,CommonModule],
  templateUrl: './first-signal.html',
  styleUrl: './first-signal.css',
})
export class FirstSignal {
  
  quantity = signal(1);
  quantityAvailable = signal([1, 2, 3, 4, 5]);

  qtyEffect =effect(() => console.log(`Quantity changed to: ${this.quantity()}`));

  constructor() {
    console.log(this.quantity());
  }



  onQuantityChange($event: number) {
    this.quantity.set($event);
    alert(`Quantity changed to: ${this.quantity()}`);
  }
}
