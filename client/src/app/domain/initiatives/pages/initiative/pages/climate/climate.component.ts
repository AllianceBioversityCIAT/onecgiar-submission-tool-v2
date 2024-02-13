import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ApiService } from '../../../../../shared/services/api.service';
import { GlobalVariablesService } from '../../../../../shared/services/global-variables.service';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-climate',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './climate.component.html',
  styleUrl: './climate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClimateComponent {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public climateChangeFocusBody = signal({
    climate_change_focus_p25_html: null,
  });

  ngOnInit(): void {
    this.getClimateChangeFocus();
  }

  async getClimateChangeFocus() {
    const response = await this.api.GET_ClimateChangeFocus();

    response?.success &&
      this.climateChangeFocusBody.set({
        climate_change_focus_p25_html: response.data?.data?.climate_change_focus_p25_html,
      });
  }

  saveClimateChangeFocusButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveClimateChangeFocusSection();
  });

  async saveClimateChangeFocusSection() {
    const response = await this.api.PATCH_ClimateChangeFocus(this.climateChangeFocusBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Section saved' : 'Error',
    });

    console.log(this.climateChangeFocusBody().climate_change_focus_p25_html);
    this.globalVars.isSavingSection.set(false);
  }
}
