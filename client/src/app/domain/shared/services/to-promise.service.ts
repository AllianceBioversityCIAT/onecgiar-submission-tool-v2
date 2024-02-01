import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToPromiseService {
  constructor(public http: HttpClient) {}

  TP = (subscription: Observable<any>): Promise<any> => {
    return new Promise(async (resolve) => {
      try {
        resolve(await firstValueFrom(subscription));
      } catch (error: any) {
        console.error(error);
        resolve({ error: true, detail: error?.error?.message, data: error });
      }
    });
  };

  post = (url: string, body: any) => {
    return this.TP(this.http.post<any>(url, body));
  };

  put = (url: string, body: any) => {
    return this.TP(this.http.put<any>(url, body));
  };

  get = (url: string) => {
    return this.TP(this.http.get<any>(url));
  };
}
