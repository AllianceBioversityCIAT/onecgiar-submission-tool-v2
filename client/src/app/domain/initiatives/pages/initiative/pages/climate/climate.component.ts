import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
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
  // public api = inject(ApiService);
  public messageService = inject(MessageService);

  public climateChangeFocusBody = signal({
    climate_change_focus_html: null,
  });

  // ngOnInit(): void {
  //   this.getClimateChangeFocus();
  // }

  // async getClimateChangeFocus() {
  // const response = await this.api.GET_GenderResearchAndImpact();

  //   response?.success &&
  //     this.climateChangeFocusBody.set({
  //       climate_change_focus_html: response.data?.data?.climate_change_focus_html,
  //     });
  // }

  saveClimateChangeFocusButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveClimateChangeFocusSection();
  });

  saveClimateChangeFocusSection() {
    // const response = await this.api.PATCH_GenderResearchAndImpact(this.climateChangeFocusBody());

    setTimeout(() => {
      this.messageService.add({
        // severity: response?.success ? 'success' : 'error',
        severity: 'success',
        summary: 'Success',
        // detail: response?.success ? 'Section saved' : 'Error',
        detail: 'Section saved',
      });

      console.log(this.climateChangeFocusBody().climate_change_focus_html);
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
