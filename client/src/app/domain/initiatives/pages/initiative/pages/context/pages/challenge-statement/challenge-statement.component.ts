import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';
import { ToPromiseService } from '../../../../../../../shared/services/to-promise.service';
import { environment } from '../../../../../../../../../environments/environment.development';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-challenge-statement',
  standalone: true,
  imports: [
    FormsModule,
    EditorModule,
    ButtonModule,
    FieldContainerDirective,
    JsonPipe,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './challenge-statement.component.html',
  styleUrl: './challenge-statement.component.scss',
})
export class ChallengeStatementComponent {
  public globalVars = inject(GlobalVariablesService);
  public TP = inject(ToPromiseService);
  private messageService = inject(MessageService);

  public challengeStatementBody = signal({
    challenge_statement_html: null,
  });

  ngOnInit(): void {
    this.getChallengeStatement();
  }

  getChallengeStatement(): void {
    this.TP.get(`${environment.apiBaseUrl}/entity/1/initiative-details/challenge-statement`).then(
      (response) => {
        if (response?.success) {
          this.challengeStatementBody.set({
            challenge_statement_html: response.data?.data?.challenge_statement_html,
          });
        }
      },
    );
  }

  saveChallengeStatementButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.challengeStatementBody());
      this.saveChallengeStatementSection();
    }
  });

  saveChallengeStatementSection(): void {
    this.TP.patch(
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/challenge-statement/save`,
      this.challengeStatementBody(),
    ).then((response) => {
      this.globalVars.isSavingSection.set(false);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Content',
      });
      console.log(response);
    });
  }
}
