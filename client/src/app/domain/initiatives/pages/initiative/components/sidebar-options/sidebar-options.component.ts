import { Component, Input } from '@angular/core';
import { SidebarOptionComponent } from '../sidebar-option/sidebar-option.component';

@Component({
  selector: 'app-sidebar-options',
  standalone: true,
  imports: [SidebarOptionComponent],
  templateUrl: './sidebar-options.component.html',
  styleUrl: './sidebar-options.component.scss',
})
export class SidebarOptionsComponent {
  @Input() options: any;
}
