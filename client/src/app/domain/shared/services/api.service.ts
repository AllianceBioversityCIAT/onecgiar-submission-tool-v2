import { Injectable, inject } from '@angular/core';
import { ToPromiseService } from './to-promise.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  TP = inject(ToPromiseService);

  getExample = () => {
    const url = () => 'https://jsonplaceholder.typicode.com/users';
    return this.TP.get(url());
  };
}
