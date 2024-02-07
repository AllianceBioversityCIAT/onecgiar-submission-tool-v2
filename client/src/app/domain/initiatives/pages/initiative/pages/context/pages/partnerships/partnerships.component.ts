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
  selector: 'app-partnerships',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './partnerships.component.html',
  styleUrl: './partnerships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnershipsComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public partnershipBody = signal({
    partnerships_html: null,
  });

  ngOnInit(): void {
    this.getPartnerships();
  }

  async getPartnerships() {
    const response = await this.api.GET_Partnerships();

    response?.success &&
      this.partnershipBody.set({
        partnerships_html: response.data?.data?.partnerships_html,
      });
  }

  savePartnershipButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.savePartnershipsSection();
  });

  async savePartnershipsSection() {
    const response = await this.api.PATCH_Partnerships(this.partnershipBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
