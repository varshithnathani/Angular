// src/app/dashboard/dashboard.ts

import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard { 
  constructor(private router: Router) {}

  logout(event: Event) {
    event.preventDefault(); // prevent default link action
    // clear auth state here if any (e.g., localStorage.clear())
    this.router.navigate(['/login']);
  }
}
