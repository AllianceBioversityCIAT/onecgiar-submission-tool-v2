import { Component } from '@angular/core';
import { ChallengeStatementComponent } from './pages/challengeStatement/challengeStatement.component';

@Component({
  selector: 'app-context',
  standalone: true,
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
  imports: [ChallengeStatementComponent],
})
export class ContextComponent {}
