import { Component, Input } from '@angular/core';
import { SidebarOptionComponent } from '../sidebar-option/sidebar-option.component';

@Component({
  selector: 'div[app-sidebar-options]',
  standalone: true,
  imports: [SidebarOptionComponent],
  templateUrl: './sidebar-options.component.html',
  styles: ``,
})
export class SidebarOptionsComponent {
  @Input() options: any;
}
