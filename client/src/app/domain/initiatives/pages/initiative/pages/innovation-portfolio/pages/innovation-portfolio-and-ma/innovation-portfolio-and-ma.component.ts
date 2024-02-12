import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { ApiService } from '../../../../../../../shared/services/api.service';

@Component({
  selector: 'app-innovation-portfolio-and-ma',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, ToastModule, FieldContainerDirective],
  providers: [MessageService],
  templateUrl: './innovation-portfolio-and-ma.component.html',
  styleUrl: './innovation-portfolio-and-ma.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnovationPortfolioAndMaComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public innoPortfolioAndMA = signal({
    vision_management_approach_html: null,
  });

  ngOnInit(): void {
    this.getInnovationPortfolioAndMA();
  }

  async getInnovationPortfolioAndMA() {
    const response = await this.api.GET_InnovationPortfolioVisionAndMA();

    response?.success &&
      this.innoPortfolioAndMA.set({
        vision_management_approach_html: response.data?.data?.vision_management_approach_html,
      });
  }

  saveInnoPortfolioAndMAButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveInnoPortfolioAndMASection();
  });

  async saveInnoPortfolioAndMASection() {
    const response = await this.api.PATCH_InnovationPortfolioVisionAndMA(this.innoPortfolioAndMA());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
