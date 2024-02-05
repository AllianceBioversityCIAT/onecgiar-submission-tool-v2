import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-priority-setting',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './priority-setting.component.html',
  styleUrl: './priority-setting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrioritySettingComponent {
  public globalVars = inject(GlobalVariablesService);
  public prioritySettingsBody = signal({
    priority_setting_html: null,
  });

  savePrioritySettingButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.prioritySettingsBody());
      this.savePrioritySettingSection();
    }
  });

  savePrioritySettingSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
