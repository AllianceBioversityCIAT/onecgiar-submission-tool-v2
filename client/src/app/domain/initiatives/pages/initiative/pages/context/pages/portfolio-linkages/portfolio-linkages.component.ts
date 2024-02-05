import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio-linkages',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './portfolio-linkages.component.html',
  styleUrl: './portfolio-linkages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLinkagesComponent {
  public globalVars = inject(GlobalVariablesService);
  public portfolioLinkagesBody = signal({
    portfolio_linkages_html: null,
  });

  savePortfolioLinkagesButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.portfolioLinkagesBody());
      this.savePortfolioLinkagesSection();
    }
  });

  savePortfolioLinkagesSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
