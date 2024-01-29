import { Component } from '@angular/core';
import { ChallengeStatementComponent } from './pages/challenge-statement/challenge-statement.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-context',
  standalone: true,
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss',
  imports: [ChallengeStatementComponent, RouterModule],
})
export class ContextComponent {}
