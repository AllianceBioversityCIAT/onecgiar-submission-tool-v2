import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [AvatarModule, AvatarGroupModule, NgClass],
})
export class NavbarComponent {
  isNavbarHidden = false;
  isLogged = true;
  navbarLinks = [
    {
      name: 'Initiatives',
      url: '/about',
    },
    {
      name: 'Bussiness Intelligence Dashboard',
      url: '/about',
    },
    {
      name: 'FAQ',
      url: '/about',
    },
    {
      name: 'Admin Panel',
      url: '/about',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}
