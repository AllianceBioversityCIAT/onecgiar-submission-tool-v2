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
  selector: 'app-priority-setting',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './priority-setting.component.html',
  styleUrl: './priority-setting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrioritySettingComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  private messageService = inject(MessageService);

  public prioritySettingsBody = signal({
    priority_setting_html: null,
  });

  ngOnInit(): void {
    this.getPrioritySetting();
  }

  async getPrioritySetting() {
    const response = await this.api.GET_PrioritySetting();

    response?.success &&
      this.prioritySettingsBody.set({
        priority_setting_html: response.data?.data?.priority_setting_html,
      });
  }

  savePrioritySettingButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.savePrioritySettingSection();
  });

  async savePrioritySettingSection() {
    const response = await this.api.PATCH_PrioritySetting(this.prioritySettingsBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
