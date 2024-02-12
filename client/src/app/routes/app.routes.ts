import { Routes } from '@angular/router';
import { Authenticated } from '@auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: 'authentication',
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
        canActivate: [Authenticated],
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
            children: [
              {
                path: '',
                redirectTo: 'summary-table',
                pathMatch: 'full',
              },
              {
                path: 'summary-table',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/overview/pages/summary-table/summary-table.component'
                  ).then((c) => c.SummaryTableComponent),
              },
              {
                path: 'executive-summary',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/overview/pages/executive-summary/executive-summary.component'
                  ).then((c) => c.ExecutiveSummaryComponent),
              },
            ],
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
          {
            path: 'innovation-portfolio',
            loadComponent: () =>
              import(
                '../domain/initiatives/pages/initiative/pages/innovation-portfolio/innovation-portfolio.component'
              ).then((c) => c.InnovationPortfolioComponent),
            children: [
              {
                path: '',
                redirectTo: 'innovation-portfolio-and-ma',
                pathMatch: 'full',
              },
              {
                path: 'innovation-portfolio-and-ma',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/innovation-portfolio/pages/innovation-portfolio-and-ma/innovation-portfolio-and-ma.component'
                  ).then((c) => c.InnovationPortfolioAndMaComponent),
              },
              {
                path: 'innovation-packages-and-srp',
                loadComponent: () =>
                  import(
                    '../domain/initiatives/pages/initiative/pages/innovation-portfolio/pages/innovation-packages-and-srp/innovation-packages-and-srp.component'
                  ).then((c) => c.InnovationPackagesAndSrpComponent),
              },
            ],
          },
          {
            path: 'gender-research-and-impact',
            loadComponent: () =>
              import('../domain/initiatives/pages/initiative/pages/gender/gender.component').then(
                (c) => c.GenderComponent,
              ),
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
