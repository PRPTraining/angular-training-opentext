import { Component } from '@angular/core';

import { Parent } from './parent/parent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Parent,FormsModule],
})
export class App {
  name: string = '';

  imageUrl: string = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/cars-4-4.jpg';

  clicked:boolean = false;
  greet(): string {
    return 'Hello ' + this.name;
  }

  onButtonClick(): void {
   this.clicked = !this.clicked;

    
  }
}
