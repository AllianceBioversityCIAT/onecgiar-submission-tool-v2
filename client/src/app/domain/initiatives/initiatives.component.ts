import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-initiatives',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="text-primary">initiatives.component</div>
    <router-outlet />
  `,
  styles: `
  div{
    color: red;
  }
  `,
})
export class InitiativesComponent {}
