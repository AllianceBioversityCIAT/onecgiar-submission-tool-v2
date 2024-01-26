import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    InputTextModule,
    FieldContainerDirective,
    FormsModule,
    DropdownModule,
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

  updateSignal(e: any, signalName: string) {
    // console.log(signalName);
    // console.log(e);
    this.body.update((prev) => ({ ...prev, [signalName]: e }));
  }
}
