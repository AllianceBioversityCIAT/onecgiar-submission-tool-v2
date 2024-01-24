import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-initiatives',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <router-outlet />
    <app-footer></app-footer>
  `,
  styles: `
  div{
    color: red;
  }
  `,
  imports: [RouterModule, NavbarComponent, FooterComponent],
})
export class InitiativesComponent {}
