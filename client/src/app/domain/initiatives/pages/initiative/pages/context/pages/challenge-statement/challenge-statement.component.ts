import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-challenge-statement',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, ToastModule],
  providers: [MessageService],
  templateUrl: './challenge-statement.component.html',
  styleUrl: './challenge-statement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChallengeStatementComponent implements OnInit {
  public globalVars = inject(GlobalVariablesService);
  public api = inject(ApiService);
  public messageService = inject(MessageService);

  public challengeStatementBody = signal({
    challenge_statement_html: null,
  });

  ngOnInit(): void {
    this.getChallengeStatement();
  }

  async getChallengeStatement() {
    const response = await this.api.GET_ChallengeStatement();

    response?.success &&
      this.challengeStatementBody.set({
        challenge_statement_html: response.data?.data?.challenge_statement_html,
      });
  }

  saveChallengeStatementButtonEffect = effect(() => {
    this.globalVars.isSavingSection() && this.saveChallengeStatementSection();
  });

  async saveChallengeStatementSection() {
    const response = await this.api.PATCH_ChallengeStatement(this.challengeStatementBody());

    this.messageService.add({
      severity: response?.success ? 'success' : 'error',
      summary: 'Success',
      detail: response?.success ? 'Success' : 'Error',
    });

    this.globalVars.isSavingSection.set(false);
  }
}
