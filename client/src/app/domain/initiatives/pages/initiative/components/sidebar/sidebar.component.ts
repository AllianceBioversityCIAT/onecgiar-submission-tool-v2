import { Component, inject } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';
import { MenuModule } from 'primeng/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarOptionsComponent, MenuModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  router = inject(Router);
  options = [
    {
      label: 'Overview',
      route: 'overview',
      inUnderConstruction: false,
    },
    {
      label: '2. Context',
      route: 'context',
      children: [
        {
          label: '2.1 Challenge Statement',
          route: 'overview',
        },
        {
          label: '2.2 Measurable three-year (End of Initiative) outcomes',
          route: 'overview',
        },
        {
          label: '2.3 Comparative Advantage',
          route: 'overview',
          children: [
            {
              label: '2.3.1 Incentives',
            },
            {
              label: '2.3.2 Human capital',
            },
            {
              label: '2.3.3 Biophysical capital',
            },
            {
              label: '2.3.4 Social capital',
            },
          ],
        },
        {
          label: '2.4 Partnerships',
          route: 'overview',
        },
        {
          label:
            '2.5 Learning from prior evaluations and Impact Assessments (IA)',
          route: 'overview',
        },
        {
          label: '2.6 Priority setting',
          route: 'overview',
        },
        {
          label: '2.7 Participatory design process',
          route: 'overview',
        },
        {
          label: '2.8 Portfolio Linkages',
          route: 'overview',
        },
      ],
    },
  ];
}
