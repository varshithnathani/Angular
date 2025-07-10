import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Students } from './students/students';
import { Faculty } from './faculty/faculty';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'students', component: Students },
      { path: 'faculty', component: Faculty },
      { path: '', redirectTo: 'students', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }  // wildcard redirect to dashboard
];
