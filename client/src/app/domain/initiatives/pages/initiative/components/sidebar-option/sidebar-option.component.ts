import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[app-sidebar-option]',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-option.component.html',
  styleUrl: './sidebar-option.component.scss',
})
export class SidebarOptionComponent {
  @Input() option: any;
}
