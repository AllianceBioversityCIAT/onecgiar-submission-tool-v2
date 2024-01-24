import { Routes } from '@angular/router';

export const routes: Routes = [
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
  {
    path: '',
    loadComponent: () =>
      import('../domain/initiatives/initiatives.component').then(
        (m) => m.InitiativesComponent,
      ),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            '../domain/initiatives/pages/initiatives-list/initiatives-list.component'
          ).then((c) => c.InitiativesListComponent),
      },
      {
        path: 'initiative',
        loadComponent: () =>
          import(
            '../domain/initiatives/pages/initiative/initiative.component'
          ).then((c) => c.InitiativeComponent),
        children: [
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full',
          },
          {
            path: 'overview',
            loadComponent: () =>
              import(
                '../domain/initiatives/pages/initiative/pages/overview/overview.component'
              ).then((c) => c.OverviewComponent),
          },
          {
            path: 'context',
            loadComponent: () =>
              import(
                '../domain/initiatives/pages/initiative/pages/context/context.component'
              ).then((c) => c.ContextComponent),
          },
        ],
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../domain/initiatives/pages/about/about.component').then(
            (c) => c.AboutComponent,
          ),
      },
    ],
  },
];
