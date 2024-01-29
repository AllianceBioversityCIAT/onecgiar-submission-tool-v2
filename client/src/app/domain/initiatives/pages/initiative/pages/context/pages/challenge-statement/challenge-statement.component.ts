import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-challenge-statement',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './challenge-statement.component.html',
  styleUrl: './challenge-statement.component.scss',
})
export class ChallengeStatementComponent {
  inputText: string | undefined = '';

  handleSubmit() {
    console.log(this.inputText);
  }
}
