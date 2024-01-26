import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-challenge-statement',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule],
  templateUrl: './challengeStatement.component.html',
  styleUrl: './challengeStatement.component.scss',
})
export class ChallengeStatementComponent {
  inputText: string | undefined = '';

  handleSubmit() {
    console.log(this.inputText);
  }
}
