import { Component, effect, inject, signal } from '@angular/core';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { GlobalVariablesService } from '../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.scss',
})
export class GenderComponent {
  public globalVars = inject(GlobalVariablesService);
  public genderResearchAndImpactBody = signal({
    gender_research_and_impact_html: null,
  });

  saveGenderResearchAndImpactButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveGenderResearchAndImpactSection();
  });

  saveGenderResearchAndImpactSection() {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
      console.log(this.genderResearchAndImpactBody().gender_research_and_impact_html);
    }, 1500);
  }
}
