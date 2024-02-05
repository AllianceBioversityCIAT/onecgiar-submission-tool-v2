import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-participatory-design-process',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './participatory-design-process.component.html',
  styleUrl: './participatory-design-process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipatoryDesignProcessComponent {
  public globalVars = inject(GlobalVariablesService);
  public pDesignProcessBody = signal({
    participatory_desing_process_html: null,
  });

  savePDesignProcessButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.pDesignProcessBody());
      this.savePDesignProcessSection();
    }
  });

  savePDesignProcessSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
