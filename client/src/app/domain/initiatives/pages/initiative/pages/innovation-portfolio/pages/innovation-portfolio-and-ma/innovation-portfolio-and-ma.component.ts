import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-innovation-portfolio-and-ma',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './innovation-portfolio-and-ma.component.html',
  styleUrl: './innovation-portfolio-and-ma.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnovationPortfolioAndMaComponent {
  public globalVars = inject(GlobalVariablesService);
  public innoPortfolioAndMA = signal({
    innovation_portfolio_and_ma_html: null,
  });

  saveInnoPortfolioAndMAButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveInnoPortfolioAndMASection();
  });

  saveInnoPortfolioAndMASection() {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
      console.log(this.innoPortfolioAndMA().innovation_portfolio_and_ma_html);
    }, 1500);
  }
}
