import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-innovation-packages-and-srp',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './innovation-packages-and-srp.component.html',
  styleUrl: './innovation-packages-and-srp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnovationPackagesAndSrpComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public innoPackagesAndSRP = signal({
    scaling_readiness_implementation_html: null,
  });

  ngOnInit(): void {
    this.getInnovationPackagesAndSRP();
  }

  async getInnovationPackagesAndSRP() {
    const response = await this.api.GET_InnovationPackagesAndSRP();

    response?.success &&
      this.innoPackagesAndSRP.set({
        scaling_readiness_implementation_html:
          response.data?.data?.scaling_readiness_implementation_html,
      });
  }

  saveInnoPackagesAndSRPButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveInnoPackagesAndSRPSection();
  });

  async saveInnoPackagesAndSRPSection() {
    const response = await this.api.PATCH_InnovationPackagesAndSRP(this.innoPackagesAndSRP());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
