import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatusLabelPipe } from "../../pipes/status-label-pipe";

@Component({
  selector: 'app-home',
  imports: [CommonModule, StatusLabelPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  price:number =1500
}
