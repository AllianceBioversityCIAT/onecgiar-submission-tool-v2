import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-participatory-design-process',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './participatory-design-process.component.html',
  styleUrl: './participatory-design-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipatoryDesignProcessComponent {}
