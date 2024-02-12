import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../shared/services/global-variables.service';
import { ApiService } from '../../../../../shared/services/api.service';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss',
})
export class GenderComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public genderResearchAndImpactBody = signal({
    gender_research_impact_p25_html: null,
  });

  ngOnInit(): void {
    this.getGenderResearchAndImpact();
  }

  async getGenderResearchAndImpact() {
    const response = await this.api.GET_GenderResearchAndImpact();

    response?.success &&
      this.genderResearchAndImpactBody.set({
        gender_research_impact_p25_html: response.data?.data?.gender_research_impact_p25_html,
      });
  }

  saveGenderResearchAndImpactButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveGenderResearchAndImpactSection();
  });

  async saveGenderResearchAndImpactSection() {
    const response = await this.api.PATCH_GenderResearchAndImpact(
      this.genderResearchAndImpactBody(),
    );

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Section saved' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
