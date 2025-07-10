import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Basic dummy validation: allow only username: admin, password: admin123
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login successful!');
      // Navigate to dashboard or home page after login
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials, try again.');
    }
  }
}
