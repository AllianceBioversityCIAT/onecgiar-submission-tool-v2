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
    const awsToken = this.activatedRoute.snapshot.paramMap.get('awsToken');
    console.log(awsToken);
    this.getExample();
  }

  async getExample() {
    const response = await this.api.getExample();
    console.log(response);
  }
}
