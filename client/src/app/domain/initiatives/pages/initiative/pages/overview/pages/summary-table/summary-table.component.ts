import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { ActionAreasListService } from '../../../../../../../shared/services/control-lists/action-areas-list.service';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { OverviewBody } from '../../../../../../../shared/models';

@Component({
  selector: 'app-summary-table',
  standalone: true,
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
  providers: [MessageService],
  templateUrl: './summary-table.component.html',
  styleUrl: './summary-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryTableComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);
  public actionAreasListSE = inject(ActionAreasListService);

  public summaryTableBody = signal(new OverviewBody());

  uploadedFiles: any[] = [];

  ngOnInit(): void {
    this.getSummaryTable();
  }

  async getSummaryTable() {
    const response = await this.api.GET_SummaryTable();

    response.success && this.api.updateSignalBody(this.summaryTableBody, response.data);
  }

  updateSignal(e: any, pathString: keyof InstanceType<typeof OverviewBody> | string) {
    this.summaryTableBody.update((prev: any) => {
      const editDataByPathString = (value: any) => {
        const path = pathString.split('.');
        const lastKey: any = path.pop();
        path.reduce((acc, key) => (acc[key] = acc[key] || {}), prev)[lastKey] = value;
      };
      editDataByPathString(e);
      return { ...prev };
    });
  }

  saveSummaryTableButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveSummaryTableSection();
  });

  async saveSummaryTableSection() {
    const response = await this.api.PATCH_SummaryTable(this.summaryTableBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Section saved' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
