import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {
  activatedRoute = inject(ActivatedRoute);
  api = inject(ApiService);

  ngOnInit(): void {
    const { code } = this.activatedRoute.snapshot.queryParams || {};
    this.login(code);
  }

  async login(code: string) {
    await this.api.login(code);
  }

  async getExample() {
    await this.api.getExample();
  }
}
