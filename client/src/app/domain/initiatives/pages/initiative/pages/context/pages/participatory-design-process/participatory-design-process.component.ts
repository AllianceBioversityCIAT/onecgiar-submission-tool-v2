import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { ApiService } from '../../../../../../../shared/services/api.service';

@Component({
  selector: 'app-participatory-design-process',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './participatory-design-process.component.html',
  styleUrl: './participatory-design-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipatoryDesignProcessComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public pDesignProcessBody = signal({
    participatory_desing_process_html: null,
  });

  ngOnInit(): void {
    this.getParticipatoryDesignProcess();
  }

  async getParticipatoryDesignProcess() {
    const response = await this.api.GET_ParticipatoryDesignProcess();

    response?.success &&
      this.pDesignProcessBody.set({
        participatory_desing_process_html: response.data?.data?.participatory_desing_process_html,
      });
  }

  savePDesignProcessButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.savePDesignProcessSection();
  });

  async savePDesignProcessSection() {
    const response = await this.api.PATCH_ParticipatoryDesignProcess(this.pDesignProcessBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
