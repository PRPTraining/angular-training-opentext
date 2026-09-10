import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

interface LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-new-login',
  imports: [FormField],
  templateUrl: './new-login.html',
  styleUrl: './new-login.css',
})
export class NewLogin {
  loginModel = signal<LoginData>({
    username: '',
    password: '',
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    // Username validation
    required(fieldPath.username, {
      message: 'Username is required',
    });

    minLength(fieldPath.username, 3, {
      message: 'Username must be at least 3 characters',
    });

    // Password validation
    required(fieldPath.password, {
      message: 'Password is required',
    });

    minLength(fieldPath.password, 6, {
      message: 'Password must be at least 6 characters',
    });
  });

  onSubmit(): void {
    if (this.loginForm().valid()) {
      alert(JSON.stringify(this.loginModel()));
    }
  }
}
