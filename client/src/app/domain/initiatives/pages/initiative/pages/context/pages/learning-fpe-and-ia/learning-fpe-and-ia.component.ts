import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-learning-fpe-and-ia',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './learning-fpe-and-ia.component.html',
  styleUrl: './learning-fpe-and-ia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningFpeAndIaComponent {}
