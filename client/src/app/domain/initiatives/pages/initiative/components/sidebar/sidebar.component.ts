import { ChangeDetectionStrategy, Component, Signal, computed, inject } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';
import { MenuModule } from 'primeng/menu';
import { Router } from '@angular/router';
import { SidebarOption } from '../../../../../shared/interfaces/ui.interface';
import { InitiativeService } from '../../services/initiative.service';

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
  initiativeSE = inject(InitiativeService);
  options: Signal<SidebarOption[]> = computed(() => {
    // this.initiativeSE.currentInitiativeId() +
    let options = [
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

    addInitiativeId(options, `initiative/${this.initiativeSE.currentInitiativeId()}`);

    return options;
  });
}
