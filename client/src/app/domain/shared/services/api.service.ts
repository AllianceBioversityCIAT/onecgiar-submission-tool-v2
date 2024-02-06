import { Injectable, inject } from '@angular/core';
import { ToPromiseService } from './to-promise.service';
import { ErrorResponse, LoginRes, MainResponse } from '../interfaces/responses.interface';
import { OverviewBody } from '../models/overview-body.class';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  TP = inject(ToPromiseService);

  login = (awsToken: string): Promise<MainResponse<LoginRes>> => {
    const url = () => `http://localhost:3002/auth/login`;
    return this.TP.post(url(), {}, awsToken);
  };

  GET_overview = (id: string): Promise<MainResponse<OverviewBody>> => {
    const url = () => `api/entity/${id}/overview-summary`;
    return this.TP.get(url(), true);
  };

  PATCH_overview = (id: string, body: OverviewBody): Promise<MainResponse<OverviewBody>> => {
    const url = () => `api/entity/${id}/overview-summary/save`;
    return this.TP.patch(url(), body);
  };
}
