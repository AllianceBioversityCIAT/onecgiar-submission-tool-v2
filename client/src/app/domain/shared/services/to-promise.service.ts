import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { ErrorResponse, MainResponse } from '../interfaces/responses.interface';

@Injectable({
  providedIn: 'root',
})
export class ToPromiseService {
  constructor(public http: HttpClient) {}

  TP = (subscription: Observable<any>): Promise<MainResponse<any>> => {
    return new Promise(async (resolve) => {
      try {
        resolve(await firstValueFrom(subscription.pipe(map((data) => ({ data, success: true })))));
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

  get = (url: string) => {
    return this.TP(this.http.get<any>(url));
  };
}
