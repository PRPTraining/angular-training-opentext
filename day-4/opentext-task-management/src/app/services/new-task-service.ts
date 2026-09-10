import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../config/app-config.token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewTaskService {
  private http = inject(HttpClient);
  
  // injecting interface APP_Config
  private config = inject(APP_CONFIG);

  private baseApiEndpoint: string = `${this.config.apiBaseUrl}/tasks`;

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseApiEndpoint);
  }
}
