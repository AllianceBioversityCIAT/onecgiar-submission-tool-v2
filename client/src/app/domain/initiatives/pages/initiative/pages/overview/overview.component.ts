import { Component } from '@angular/core';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [InputTextModule, FieldContainerDirective, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  valueExample = 'Ejemplo';
}
