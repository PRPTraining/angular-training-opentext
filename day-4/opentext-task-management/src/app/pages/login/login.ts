import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: 'login.html',
  styleUrl: 'login.css',
})
export class Login {
  private auth = inject(AuthService);

  private router = inject(Router);

  username = signal('');
  password = signal('');

  onLogin(): void {
    this.auth.login(this.username(), this.password());

    // navigate to dashboard after login

    this.router.navigate(['/dashboard']);
  }
}
