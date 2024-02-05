import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-learning-fpe-and-ia',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './learning-fpe-and-ia.component.html',
  styleUrl: './learning-fpe-and-ia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningFpeAndIaComponent {
  public globalVars = inject(GlobalVariablesService);
  public learningFPEBody = signal({
    prior_evaluations_impact_assessments_html: null,
  });

  saveLearningFPEBodyButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.learningFPEBody());
      this.saveLearningFPESection();
    }
  });

  saveLearningFPESection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
