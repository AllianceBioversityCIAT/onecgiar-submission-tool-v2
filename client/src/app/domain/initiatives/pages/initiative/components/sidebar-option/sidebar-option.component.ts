import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'div[app-sidebar-option]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar-option.component.html',
  styles: ``,
  animations: [
    trigger('expand', [
      state('expand_more', style({ height: '*' })),
      state('expand_less', style({ height: '0' })),
      transition('expand_less => expand_more', animate('.1s ease-in')),
      transition('expand_more => expand_less', animate('.1s ease-out')),
    ]),
  ],
})
export class SidebarOptionComponent {
  @Input() option: any;
}
