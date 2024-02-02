import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { GlobalVariablesService } from '../../shared/services/global-variables.service';
import { DecodedUserData } from '../../shared/interfaces/responses.interface';

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
  globalVars = inject(GlobalVariablesService);
  api = inject(ApiService);
  router = inject(Router);

  ngOnInit(): void {
    localStorage.clear();
    const { code } = this.activatedRoute.snapshot.queryParams || {};
    this.login(code);
  }

  async login(code: string) {
    await this.api.login(code);
    await this.saveInLocalStorage(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJmaXJzdF9uYW1lIjoiWWVja3NpbiIsImxhc3RfbmFtZSI6Ikd1ZXJyZXJvIiwiaWF0IjoxNzA2ODIyMzk4LCJleHAiOjE3MDcyNTQzOTh9.QI2HfMNoe6nW0lqoW6wJoRfiBYuk3mbzz-kqjOvEoA8',
    );
  }

  async saveInLocalStorage(token: string): Promise<any> {
    const jwtDecode = await import('jwt-decode');
    const decoded: DecodedUserData = jwtDecode?.jwtDecode(token);
    decoded.letter = (decoded?.first_name?.charAt(0) ?? '') + (decoded?.last_name?.charAt(0) ?? '');
    decoded.isLogged = true;
    localStorage.setItem('token', token);
    localStorage.setItem('decoded', JSON.stringify(decoded));
    this.globalVars.decodedUserData.set(decoded);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 2000);
  }
}
