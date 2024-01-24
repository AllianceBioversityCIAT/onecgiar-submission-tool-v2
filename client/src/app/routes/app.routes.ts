import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login/:awsToken',
    loadComponent: () =>
      import('@auth/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'authentication/:awsToken',
    loadComponent: () =>
      import('@auth/authentication/authentication.component').then(
        (c) => c.AuthenticationComponent,
      ),
  },
];
