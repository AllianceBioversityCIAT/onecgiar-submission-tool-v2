import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-partnerships',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './partnerships.component.html',
  styleUrl: './partnerships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnershipsComponent {
  public globalVars = inject(GlobalVariablesService);
  public partnershipBody = signal({
    partnerships_html: null,
  });

  savePartnershipButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.partnershipBody());
      this.savePartnershipSection();
    }
  });

  savePartnershipSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
