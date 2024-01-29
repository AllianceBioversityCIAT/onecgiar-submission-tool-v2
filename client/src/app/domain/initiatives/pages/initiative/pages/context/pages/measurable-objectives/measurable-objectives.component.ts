import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-measurable-objectives',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './measurable-objectives.component.html',
  styleUrl: './measurable-objectives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasurableObjectivesComponent {}
