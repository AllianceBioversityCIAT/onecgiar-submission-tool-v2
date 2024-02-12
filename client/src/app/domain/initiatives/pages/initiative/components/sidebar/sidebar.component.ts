import { ChangeDetectionStrategy, Component, Signal, computed, inject } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';
import { MenuModule } from 'primeng/menu';
import { Router } from '@angular/router';
import { SidebarOption } from '../../../../../shared/interfaces/ui.interface';
import { GlobalVariablesService } from '../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarOptionsComponent, MenuModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  router = inject(Router);
  globalVars = inject(GlobalVariablesService);
  options: Signal<SidebarOption[]> = computed(() => {
    // this.initiativeSE.currentInitiativeId() +
    let options = [
      {
        label: '1. Overview',
        route: 'overview',
        inUnderConstruction: false,
        children: [
          {
            label: '1.1 Summary Table',
            route: 'summary-table',
          },
          {
            label: '1.2 Executive Summary',
            route: 'executive-summary',
          },
        ],
      },
      {
        label: '2. Context',
        route: 'context',
        children: [
          {
            label: '2.1 Challenge Statement',
            route: 'challenge-statement',
          },
          {
            label: '2.2 Measurable three-year (End of Initiative) outcomes',
            route: 'measurable-objectives',
            // children: [
            //   {
            //     label: '2.2.1 The P25 Initiative model',
            //     route: 'overview',
            //   },
            // ],
          },
          {
            label: '2.3 Comparative Advantage',
            route: 'comparative-advantage',
            // children: [
            //   {
            //     label: '2.3.1 Incentives',
            //   },
            //   {
            //     label: '2.3.2 Human capital',
            //   },
            //   {
            //     label: '2.3.3 Biophysical capital',
            //   },
            //   {
            //     label: '2.3.4 Social capital',
            //   },
            // ],
          },
          {
            label: '2.4 Partnerships',
            route: 'partnerships',
          },
          {
            label: '2.5 Learning from prior evaluations and Impact Assessments (IA)',
            route: 'learning-fpe-and-ia',
          },
          {
            label: '2.6 Priority setting',
            route: 'priority-setting',
          },
          {
            label: '2.7 Participatory design process',
            route: 'participatory-design-process',
          },
          {
            label: '2.8 Portfolio Linkages',
            route: 'portfolio-linkages',
          },
        ],
      },
      {
        label: '4. Innovation Portfolio Management at P25 Initiative level',
        route: 'innovation-portfolio',
        inUnderConstruction: false,
        children: [
          {
            label: '4.1 Innovation portfolio vision and management approach',
            route: 'innovation-portfolio-and-ma',
          },
          {
            label: '4.2 Innovation Packages and Scaling Readiness implementation',
            route: 'innovation-packages-and-srp',
          },
        ],
      },
      {
        label: '5. Gender research and impact of the P25 Initiative ',
        route: 'gender-research-and-impact',
        inUnderConstruction: false,
      },
    ];

    // agrega el id de la iniciativa a las rutas al parametro route, pero si tine hijas pones el del padre y si tiene otro nivel haz lo mismo
    const addInitiativeId = (options: SidebarOption[], parentPath: string) => {
      options.forEach((option: SidebarOption) => {
        const route = () => {
          if (option.route) {
            return `${parentPath}/${option.route}`;
          }
          return parentPath;
        };
        option.route = route();
        option.children && addInitiativeId(option.children, option.route);
      });
    };

    addInitiativeId(options, `initiative/${this.globalVars.currentInitiativeId()}`);

    return options;
  });
}
