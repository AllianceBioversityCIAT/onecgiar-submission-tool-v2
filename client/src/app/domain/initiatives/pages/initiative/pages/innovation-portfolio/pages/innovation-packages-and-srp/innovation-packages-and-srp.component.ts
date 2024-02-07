import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-innovation-packages-and-srp',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './innovation-packages-and-srp.component.html',
  styleUrl: './innovation-packages-and-srp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnovationPackagesAndSrpComponent {
  public globalVars = inject(GlobalVariablesService);
  public innoPackagesAndSRP = signal({
    innovation_packages_and_srp_html: null,
  });

  saveInnoPackagesAndSRPButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveInnoPackagesAndSRPSection();
  });

  saveInnoPackagesAndSRPSection() {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
      console.log(this.innoPackagesAndSRP().innovation_packages_and_srp_html);
    }, 1500);
  }
}
