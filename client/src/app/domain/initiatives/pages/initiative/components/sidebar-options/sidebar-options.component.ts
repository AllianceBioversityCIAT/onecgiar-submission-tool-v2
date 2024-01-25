import { Component, Input, Signal, computed, signal } from '@angular/core';
import { SidebarOptionComponent } from '../sidebar-option/sidebar-option.component';
import { SidebarOption } from '../../../../../shared/interfaces/ui.interface';

@Component({
  selector: 'div[app-sidebar-options]',
  standalone: true,
  imports: [SidebarOptionComponent],
  templateUrl: './sidebar-options.component.html',
  styles: ``,
})
export class SidebarOptionsComponent {
  @Input() options: Signal<SidebarOption[]> = computed(() => []);
}
