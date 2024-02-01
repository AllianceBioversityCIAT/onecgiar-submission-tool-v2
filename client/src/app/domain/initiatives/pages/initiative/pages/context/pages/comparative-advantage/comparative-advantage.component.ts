import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-comparative-advantage',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './comparative-advantage.component.html',
  styleUrl: './comparative-advantage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComparativeAdvantageComponent {}
