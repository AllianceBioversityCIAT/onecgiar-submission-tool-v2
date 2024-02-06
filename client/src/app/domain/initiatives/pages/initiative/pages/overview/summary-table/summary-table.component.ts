import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { FieldContainerDirective } from '../../../../../../shared/directives/field-container.directive';
import { ApiService } from '../../../../../../shared/services/api.service';
import { GlobalVariablesService } from '../../../../../../shared/services/global-variables.service';
import { OverviewBody } from '../../../../../../shared/models/overview-body.class';
import { ActionAreasListService } from '../../../../../../shared/services/control-lists/action-areas/action-areas-list.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-summary-table',
  standalone: true,
  providers: [MessageService],
  imports: [
    InputTextModule,
    FieldContainerDirective,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule,
    MultiSelectModule,
    ToastModule,
  ],
  templateUrl: './summary-table.component.html',
  styleUrl: './summary-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTableComponent {
  api = inject(ApiService);
  actionAreasListSE = inject(ActionAreasListService);
  globalVars = inject(GlobalVariablesService);
  messageService = inject(MessageService);

  body = signal(new OverviewBody());

  uploadedFiles: any[] = [];

  ngOnInit(): void {
    this.getSectionData();
  }

  savePrioritySettingButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      this.saveSection();
    }
  });

  updateSignal(e: any, pathString: keyof InstanceType<typeof OverviewBody> | string) {
    this.body.update((prev: any) => {
      const editDataByPathString = (value: any) => {
        const path = pathString.split('.');
        const lastKey: any = path.pop();
        path.reduce((acc, key) => (acc[key] = acc[key] || {}), prev)[lastKey] = value;
      };
      editDataByPathString(e);
      return prev;
    });
  }

  async getSectionData() {
    const response = await this.api.GET_overview('1');
    console.log(response.data);
    this.api.updateSignalBody(this.body, response.data);
  }

  async saveSection() {
    console.log(this.body());
    const response = await this.api.PATCH_overview('1', this.body());
    this.globalVars.isSavingSection.set(false);
    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Section saved' : 'Error',
    });
    this.getSectionData();
  }
}
