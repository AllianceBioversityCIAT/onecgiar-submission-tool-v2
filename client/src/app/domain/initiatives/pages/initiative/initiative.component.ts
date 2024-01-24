import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-initiative',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
})
export class InitiativeComponent {}
