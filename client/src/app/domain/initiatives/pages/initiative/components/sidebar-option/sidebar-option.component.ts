import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'div[app-sidebar-option]',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-option.component.html',
  styleUrl: './sidebar-option.component.scss',
  animations: [
    trigger('expand', [
      state('expand_more', style({ height: '*' })),
      state('expand_less', style({ height: '0' })),
      transition('expand_less => expand_more', animate('.3s ease-in')),
      transition('expand_more => expand_less', animate('.3s ease-out')),
    ]),
  ],
})
export class SidebarOptionComponent {
  @Input() option: any;
}
