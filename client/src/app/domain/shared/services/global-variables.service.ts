import { Injectable, WritableSignal, signal } from '@angular/core';
import { DecodedUserData } from '../interfaces/responses.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalVariablesService {
  currentInitiativeId = signal('');
  decodedUserData: WritableSignal<DecodedUserData> = signal(
    JSON.parse(localStorage.getItem('decoded') ?? '{}') ?? {},
  );

  constructor() {
    console.log(this.decodedUserData());
  }
}
