import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [AvatarModule, AvatarGroupModule],
})
export class NavbarComponent {
  isNavbarHidden = false;
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
  ];
}
