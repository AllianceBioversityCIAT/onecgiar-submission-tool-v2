import { Injectable, inject } from '@angular/core';
import { ToPromiseService } from './to-promise.service';
import { ErrorResponse, LoginRes, MainResponse } from '../interfaces/responses.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  TP = inject(ToPromiseService);

  getExample = () => {
    const url = () => 'https://jsonplaceholder.typicode.com/users';
    return this.TP.get(url());
  };

  login = (awsToken: string): Promise<MainResponse<LoginRes>> => {
    const url = () => `http://localhost:3002/auth/login`;
    return this.TP.post(url(), {}, awsToken);
  };
}
