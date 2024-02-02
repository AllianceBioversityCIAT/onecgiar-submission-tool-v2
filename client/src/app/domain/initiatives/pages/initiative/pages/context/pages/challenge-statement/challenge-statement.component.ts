import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { JsonPipe } from '@angular/common';
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
    challenge_statement: '',
    required: true,
  });

  saveButtonEffect = effect(() => {
    if (this.globalVars.isSavingSection()) {
      console.log(this.challengeStatementBody().challenge_statement);
      this.saveSection();
    }
  });

  saveSection(): void {
    setTimeout(() => {
      this.globalVars.isSavingSection.set(false);
    }, 1500);
  }
}
