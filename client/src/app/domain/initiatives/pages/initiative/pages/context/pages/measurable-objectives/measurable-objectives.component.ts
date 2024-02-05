import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-measurable-objectives',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './measurable-objectives.component.html',
  styleUrl: './measurable-objectives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasurableObjectivesComponent {
  public globalVars = inject(GlobalVariablesService);
  public mesurableObjectivesBody = signal({
    measurable_three_year_html: null,
    p25_initiative_model_html: null,
  });

  saveMesurableObjectivesButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.mesurableObjectivesBody());
      this.saveMesurableObjectivesSection();
    }
  });

  saveMesurableObjectivesSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
