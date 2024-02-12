import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-executive-summary',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './executive-summary.component.html',
  styleUrl: './executive-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutiveSummaryComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public executiveSummaryBody = signal({
    executive_summary_html: null,
  });

  ngOnInit(): void {
    this.getExecutiveSummary();
  }

  async getExecutiveSummary() {
    const response = await this.api.GET_ExecutiveSummary();

    response?.success &&
      this.executiveSummaryBody.set({
        executive_summary_html: response.data?.data?.executive_summary_html,
      });
  }

  saveExecutiveSummaryButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveExecutiveSummarySection();
  });

  async saveExecutiveSummarySection() {
    const response = await this.api.PATCH_ExecutiveSummary(this.executiveSummaryBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
