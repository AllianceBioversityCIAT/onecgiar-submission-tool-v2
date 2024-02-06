import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { ApiService } from '../../../../../shared/services/api.service';
import { GlobalVariablesService } from '../../../../../shared/services/global-variables.service';
import { OverviewBody } from '../../../../../shared/models/overview-body.class';

@Component({
  selector: 'app-overview',
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
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  api = inject(ApiService);
  globalVars = inject(GlobalVariablesService);
  body = signal(new OverviewBody());
  uploadedFiles: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getSectionData();
  }

  savePrioritySettingButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      this.saveSection();
    }
  });

  updateSignal(e: any, signalName: keyof InstanceType<typeof OverviewBody>) {
    this.body.update((prev) => ({ ...prev, [signalName]: e }));
  }

  async getSectionData() {
    const response = await this.api.GET_overview('1');
    console.log(response.data);
    this.api.updateSignalBody(this.body, response.data);
    console.log(this.body());
  }

  async saveSection() {
    console.log(this.body());
    const response = await this.api.PATCH_overview('1', this.body());
    console.log(response);
    this.globalVars.isSavingSection.set(false);
  }
}
