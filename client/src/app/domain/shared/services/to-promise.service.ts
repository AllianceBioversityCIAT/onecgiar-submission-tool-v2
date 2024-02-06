import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { MainResponse } from '../interfaces/responses.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToPromiseService {
  constructor(public http: HttpClient) {}

  private TP = (subscription: Observable<any>, flatten?: boolean): Promise<MainResponse<any>> => {
    return new Promise(async (resolve) => {
      try {
        resolve(
          await firstValueFrom(
            subscription.pipe(
              map((data) =>
                flatten ? { data: data.data, success: true } : { data, success: true },
              ),
            ),
          ),
        );
      } catch (error: any) {
        console.error(error);
        resolve({ success: false, errorDetail: error?.error?.message, data: error });
      }
    });
  };

  post = (url: string, body: any, token?: string) => {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.TP(this.http.post<any>(url, body, { headers }));
  };

  put = (url: string, body: any) => {
    return this.TP(this.http.put<any>(url, body));
  };

  get = (url: string, flatten?: boolean) => {
    return this.TP(this.http.get<any>(environment.apiBaseUrl + url), flatten);
  };

  patch = (url: string, body: any) => {
    return this.TP(this.http.patch<any>(environment.apiBaseUrl + url, body));
  };
}
