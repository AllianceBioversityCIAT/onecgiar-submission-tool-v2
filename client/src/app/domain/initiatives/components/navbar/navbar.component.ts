import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [AvatarModule, AvatarGroupModule, NgClass, RouterLink],
})
export class NavbarComponent {
  isNavbarHidden = false;
  isLogged = true;
  navbarLinks = [
    {
      name: 'Initiatives',
      url: '/home',
    },
    {
      name: 'Bussiness Intelligence Dashboard',
      url: '/',
    },
    {
      name: 'FAQ',
      url: '/',
    },
    {
      name: 'Admin Panel',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
  ];
}
