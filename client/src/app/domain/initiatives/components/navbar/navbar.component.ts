import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { GlobalVariablesService } from '../../../shared/services/global-variables.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [AvatarModule, AvatarGroupModule, NgClass, RouterLink, RouterLinkActive],
})
export class NavbarComponent {
  globalVars = inject(GlobalVariablesService);
  router = inject(Router);
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

  logout() {
    localStorage.clear();
    this.globalVars.decodedUserData.set({ isLogged: false });
  }

  login() {
    const queryParams = { code: 'ca2507b8-4978-4141-9c49-0488a3764f31' };

    this.router.navigate(['/authentication'], { queryParams: queryParams });
  }
}
