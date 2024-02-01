import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.snapshot.paramMap.get('awsToken');
  }
}
