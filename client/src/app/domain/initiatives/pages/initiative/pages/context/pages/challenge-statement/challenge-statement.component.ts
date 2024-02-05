import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

@Component({
  selector: 'app-challenge-statement',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective, JsonPipe],
  templateUrl: './challenge-statement.component.html',
  styleUrl: './challenge-statement.component.scss',
})
export class ChallengeStatementComponent {
  public globalVars = inject(GlobalVariablesService);
  public challengeStatementBody = signal({
    challenge_statement_html: null,
  });

  saveChallengeStatementButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.challengeStatementBody());
      this.saveChallengeStatementSection();
    }
  });

  saveChallengeStatementSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
