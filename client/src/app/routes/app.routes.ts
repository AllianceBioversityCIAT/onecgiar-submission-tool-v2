import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login/:awsToken',
    loadComponent: () => import('@auth/login/login.component').then((c) => c.LoginComponent),
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
      import('../domain/initiatives/initiatives.component').then((m) => m.InitiativesComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../domain/initiatives/pages/initiatives-list/initiatives-list.component').then(
            (c) => c.InitiativesListComponent,
          ),
      },
      {
        path: 'initiative/:initiativeId',
        loadComponent: () =>
          import('../domain/initiatives/pages/initiative/initiative.component').then(
            (c) => c.InitiativeComponent,
          ),
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
              import('../domain/initiatives/pages/initiative/pages/context/context.component').then(
                (c) => c.ContextComponent,
              ),
            children: [
              {
                path: '',
                redirectTo: 'challenge-statement',
                pathMatch: 'full',
              },
              {
                path: 'challenge-statement',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/challenge-statement/challenge-statement.component'
                  ).then((c) => c.ChallengeStatementComponent),
              },
              {
                path: 'measurable-objectives',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/measurable-objectives/measurable-objectives.component'
                  ).then((c) => c.MeasurableObjectivesComponent),
              },
              {
                path: 'comparative-advantage',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/comparative-advantage/comparative-advantage.component'
                  ).then((c) => c.ComparativeAdvantageComponent),
              },
              {
                path: 'partnerships',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/partnerships/partnerships.component'
                  ).then((c) => c.PartnershipsComponent),
              },
              {
                path: 'learning-fpe-and-ia',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/learning-fpe-and-ia/learning-fpe-and-ia.component'
                  ).then((c) => c.LearningFpeAndIaComponent),
              },
              {
                path: 'priority-setting',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/priority-setting/priority-setting.component'
                  ).then((c) => c.PrioritySettingComponent),
              },
              {
                path: 'participatory-design-process',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/participatory-design-process/participatory-design-process.component'
                  ).then((c) => c.ParticipatoryDesignProcessComponent),
              },
              {
                path: 'portfolio-linkages',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/context/pages/portfolio-linkages/portfolio-linkages.component'
                  ).then((c) => c.PortfolioLinkagesComponent),
              },
            ],
          },
        ],
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../domain/initiatives/pages/about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
];
