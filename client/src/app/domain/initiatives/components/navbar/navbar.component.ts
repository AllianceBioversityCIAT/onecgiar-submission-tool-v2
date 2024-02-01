import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [AvatarModule, AvatarGroupModule, NgClass, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  isLogged = true;
  navbarLinks = [
    {
      name: 'Initiatives',
      url: '/home',
    },
    {
      name: 'Bussiness Intelligence Dashboard',
      url: '/bussiness',
    },
    {
      name: 'FAQ',
      url: 'https://cgiar-prms.notion.site/732dccbbf1aa497998e1014b6f0ff23d?v=353021775b8441499a6c20cad279da24',
    },
    {
      name: 'Admin Panel',
      url: '/admin-panel',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}
