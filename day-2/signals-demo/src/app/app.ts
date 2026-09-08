import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstSignal } from './first-signal/first-signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstSignal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 
  x=signal<number>(10)
  y=signal<number>(20)

  z= computed(()=>this.x() + this.y())

  constructor() {
   // this.x.set(100)
   this.x.update(val=>val+10)

   effect(()=>{
    console.log('Valueof z changed to: ',this.z())
   })
  }


}
