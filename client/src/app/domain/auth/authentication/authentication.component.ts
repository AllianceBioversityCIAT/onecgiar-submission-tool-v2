import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    const awsToken = this.activatedRoute.snapshot.paramMap.get('awsToken');
    console.log(awsToken);
  }
}
