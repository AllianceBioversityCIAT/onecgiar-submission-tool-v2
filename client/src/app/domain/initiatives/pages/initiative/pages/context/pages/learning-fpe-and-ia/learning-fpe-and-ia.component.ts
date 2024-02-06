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
  selector: 'app-learning-fpe-and-ia',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './learning-fpe-and-ia.component.html',
  styleUrl: './learning-fpe-and-ia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningFpeAndIaComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  private messageService = inject(MessageService);

  public learningFPEBody = signal({
    prior_evaluations_impact_assessments_html: null,
  });

  ngOnInit(): void {
    this.getLearningFpeAndIa();
  }

  async getLearningFpeAndIa() {
    const response = await this.api.GET_LearningFPEAndIA();

    response?.success &&
      this.learningFPEBody.set({
        prior_evaluations_impact_assessments_html:
          response.data?.data?.prior_evaluations_impact_assessments_html,
      });
  }

  savePartnershipButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveLearningFPESection();
  });

  async saveLearningFPESection() {
    const response = await this.api.PATCH_LearningFPEAndIA(this.learningFPEBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
