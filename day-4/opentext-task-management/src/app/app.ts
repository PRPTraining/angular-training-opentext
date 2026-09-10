import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { TaskCard } from "./components/task-card/task-card";
import { TaskList } from './components/task-list/task-list';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  auth=inject(AuthService)
  
  router=inject(Router)

  logout():void{
    this.auth.logout()
    this.router.navigate(['/home'])
  }
}
