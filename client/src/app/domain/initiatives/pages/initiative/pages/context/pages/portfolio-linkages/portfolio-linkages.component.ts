import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-portfolio-linkages',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './portfolio-linkages.component.html',
  styleUrl: './portfolio-linkages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLinkagesComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public portfolioLinkagesBody = signal({
    portfolio_linkages_html: null,
  });

  ngOnInit(): void {
    this.getPortfolioLinkages();
  }

  async getPortfolioLinkages() {
    const response = await this.api.GET_PortfolioLinkages();

    response?.success &&
      this.portfolioLinkagesBody.set({
        portfolio_linkages_html: response.data?.data?.portfolio_linkages_html,
      });
  }

  savePDesignProcessButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.savePortfolioLinkagesSection();
  });

  async savePortfolioLinkagesSection() {
    const response = await this.api.PATCH_PortfolioLinkages(this.portfolioLinkagesBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
