import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';

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
  body = signal({
    value1: 'value1',
    value2: 'value2',
    city: { name: 'New York', code: 'NY' },
  });
  cities = signal([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]);
  uploadedFiles: any[] = [];

  updateSignal(e: any, signalName: string) {
    this.body.update((prev) => ({ ...prev, [signalName]: e }));
  }
}
