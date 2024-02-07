import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-measurable-objectives',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './measurable-objectives.component.html',
  styleUrl: './measurable-objectives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeasurableObjectivesComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public mesurableObjectivesBody = signal({
    measurable_three_year_html: null,
    p25_initiative_model_html: null,
  });

  ngOnInit(): void {
    this.getMeasurableObjectives();
  }

  async getMeasurableObjectives() {
    const response = await this.api.GET_MeasurableObjectives();

    response?.success &&
      this.mesurableObjectivesBody.set({
        measurable_three_year_html: response.data?.data?.measurable_three_year_html,
        p25_initiative_model_html: response.data?.data?.p25_initiative_model_html,
      });
  }

  saveChallengeStatementButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveMesurableObjectivesSection();
  });

  async saveMesurableObjectivesSection() {
    const response = await this.api.PATCH_MeasurableObjectives(this.mesurableObjectivesBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
