import { Component } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarOptionsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  options = [
    {
      label: 'Overview',
      icon: 'home',
      route: 'overview',
      inUnderConstruction: false,
      children: [
        {
          label: '1A',
          icon: 'home',
          route: 'overview',
          inUnderConstruction: false,
        },
        {
          label: '1B',
          icon: 'home',
          route: 'overview',
          inUnderConstruction: false,
          children: [
            {
              label: '1B.|',
              icon: 'home',
              route: 'overview',
              inUnderConstruction: false,
            },
            {
              label: '1B.||',
              icon: 'home',
              route: 'overview',
              inUnderConstruction: false,
            },
          ],
        },
      ],
    },
    {
      label: 'Context',
      icon: 'home',
      route: 'context',
      children: [
        {
          label: '2A',
          icon: 'home',
          route: 'overview',
          inUnderConstruction: false,
        },
        {
          label: '2B',
          icon: 'home',
          route: 'overview',
          inUnderConstruction: false,
        },
      ],
    },
  ];
}
