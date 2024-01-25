import { Component } from '@angular/core';
import { SidebarOptionsComponent } from '../sidebar-options/sidebar-options.component';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarOptionsComponent, MenuModule],
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
  items: any;
  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: '<span class="text-xl font-bold">Refresh</span>',
            escape: false,
            icon: 'pi pi-refresh',
            iconClass: 'text-xl',
          },
          {
            label: '<span class="text-xl font-bold">Delete</span>',
            escape: false,
            icon: 'pi pi-times',
            iconClass: 'text-xl',
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
}
